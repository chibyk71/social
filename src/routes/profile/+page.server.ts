import prisma from "$lib/prisma";
import type { PageServerLoad } from "./$types";
import type { User } from "$lib/type";

export const load = (async ({ locals }) => {
    const { user } = await locals.auth.validate() as User
    const count = await prisma.user.findUnique({
        select: {
            posts:true,
            _count: {
                select: {
                    followers: true,
                    following: true,
                    posts: true
                }
            },
        },
        where: {id:user.userId}
    })
    
    const data = { ...user, ...count! }
    return data;
}) satisfies PageServerLoad;