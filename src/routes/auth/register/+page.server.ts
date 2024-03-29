import { sendEmail } from '$lib/server/email';
import { generateEmailVerificationToken } from '$lib/server/token';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { auth } from '$lib/server/lacia';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import { LuciaError } from 'lucia';

import z from 'zod';

const userSchema = z
    .object({
        name: z.string().min(1),
        email: z.string().email().min(1),
        password: z.string().min(8),
        username:z.string().min(4)
    })

export const actions: Actions = {
    default: async (event) => {
        const { request, locals, url, cookies } = event;
        const formData = Object.fromEntries(await request.formData());
        const userData = userSchema.safeParse(formData);

        if (!userData.success) {
            const data = {
                data: formData,
                errors: userData.error.flatten().fieldErrors
            };
            return fail(400, data);
        }

        try {
            const { email, password, name, username } = userData.data;
            const user = await auth.createUser({
                key: {
                    providerId: 'email',
                    providerUserId: email.toLowerCase(),
                    password
                },
                attributes: {
                    email,
                    name,
                    username,
                    email_verified: Boolean(false),
                    avatar: "user-avatar.svg"
                }
            });

            const session = await auth.createSession({
                userId: user.userId,
                attributes: {}
            });

            const token = await generateEmailVerificationToken(user.userId);

            sendEmail({
                to: String(email),
                subject: `Welcome to SvelteKit Starter`,
                html: `<html><body><p>Click <a href="${url.origin}/email-verification/${token}">here</a> to verify your e-mail address.</p></body></html>`
            });

            locals.auth.setSession(session);
        } catch (e) {
            if (
                (e instanceof PrismaClientKnownRequestError && e.code === 'P2002') ||
                (e instanceof LuciaError && e.message === 'AUTH_DUPLICATE_KEY_ID')
            ) {
                return fail(400, {
                    errors: {
                        email: `Looks like an account with that email already exists. Try to login instead.`
                    }
                });
            }
            return fail(500, {
                message: 'Something went wrong'
            });
        }

        const redirectTo = cookies.get('redirect_to');
        if (redirectTo) {
            throw redirect(302, redirectTo);
        }
        throw redirect(302, '/');
    }
};
