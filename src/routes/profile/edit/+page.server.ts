import { z } from 'zod';
import type { PageServerLoad } from './$types';
import { superValidate } from "sveltekit-superforms/server";
import type { User } from '$lib/type';
import prisma from '$lib/prisma';
import { fail, type Actions, redirect } from '@sveltejs/kit';
import { auth } from '$lib/server/lacia';
const schema = z.object({
    name: z.string().min(3),
    username: z.string().min(3),
    bio: z.string().nullable()
})
export const load = (async ({ locals,url }) => {
    
    const session = await locals.auth.validate() as User
    
    if (!session) {
        throw redirect(302,url.origin+"/auth/login/")
    }
    
    const user = session.user

    const bio = await prisma.user.findFirst({
        where: { id: user.userId },
        select: {
            bio: true
        }
    })
    
    const form = await superValidate({ name: user.name, username: user.username, bio: bio!.bio! }, schema)
    return { form };
}) satisfies PageServerLoad;


export const actions: Actions = {
    default: async ({ locals, request }) => {
        const form = await superValidate(request, schema);
        const session = await locals.auth.validate() as User
        if (!session) {
            return fail(403, {form})
        }
        const user = session.user
        if (!form.valid) {
            return fail(400, { form });
        }

        const update = await prisma.user.update({
            where: {
                id: user.userId
            },
            data: {
                name: form.data.name,
                bio: form.data.bio,
                username: form.data.username
            }
        })

        const { name, username} = update

        auth.updateUserAttributes(user.userId,{name,username})
        return {form}
    }
};