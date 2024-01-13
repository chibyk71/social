import { sendEmail } from '$lib/server/email';
import { auth } from '$lib/server/lacia';
import { generateEmailVerificationToken, validateEmailVerificationToken } from '$lib/server/token';
import { redirect, type Actions, fail } from '@sveltejs/kit';
import type { PageServerLoad } from '../../../$types';
import prisma from '$lib/prisma';
import { isWithinExpiration } from 'lucia/utils';

const sendVerificationEmail = async (session: { user: { userId: string; email: any; }; },origin:string) => {
    try {
        const token = await generateEmailVerificationToken(session.user.userId);
        
        sendEmail({
            to: String(session.user.email),
            subject: `Welcome to SvelteKit Starter`,
            html: `<html><body><p>Click <a href="${origin}/auth/otp/${token}">here</a> to verify your e-mail address.</p></body></html>`
        });

        return {
            success: true
        };
    } catch (e) {
        return fail(500, {
            message: 'An unknown error occurred'
        });
    }
}
export const actions: Actions = {
    send: async ({ locals, url }) => {
        const session = await locals.auth.validate();
        await sendVerificationEmail(session,url.origin)
    },
    verify: async ({ request, locals }) => {
        const { token } = Object.fromEntries(await request.formData());
        if (!token) {
            return new Response('Invalid email verification link', {
                status: 400
            });
        }

        try {
            const userId = await validateEmailVerificationToken(token as string);
            const user = await auth.getUser(userId+"");
            await auth.invalidateAllUserSessions(user.userId);
            await auth.updateUserAttributes(user.userId, {
                email_verified: true
            });
            const session = await auth.createSession({
                userId: user.userId,
                attributes: {}
            });
            locals.auth.setSession(session);
            return new Response(null, {
                status: 302,
                headers: {
                    Location: '/'
                }
            });
        } catch {
            return new Response('Invalid email verification link', {
                status: 400
            });
        }
    }
};

export const load: PageServerLoad = async ({locals,url,params}) => {
    const session = await locals.auth.validate();
    if (!session) throw redirect(302, '/auth/login');
    if (session.user.emailVerified) {
        throw redirect(302, '/');
    }
    
    if (!params.token) {
        const expiresIn = await prisma.emailVerificationToken.findFirst({
            where: { user_id: session.user.user_id },
            select: { expires: true },
            orderBy: {expires: "desc"}
        })

        if (!isWithinExpiration((expiresIn?.expires as bigint))) {
            await sendVerificationEmail(session, url.origin)
        }
    }

    return {otp:params.token}
};