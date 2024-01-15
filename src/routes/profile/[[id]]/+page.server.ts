import prisma from "$lib/prisma";
import type { PageServerLoad } from "../$types";
import type { User } from "$lib/type";
import { redirect } from "@sveltejs/kit";

export const load = (async ({ locals,params }) => {
    const { user } = await locals.auth.validate() as User
    const id = params.id || user.userId

    if (!id) {
        throw redirect(304,"/auth/login/")
    }
    const count = await prisma.user.findUnique({
        select: {
            posts: true,
            followers: {
                select: {
                    id: true,
                },
                where: {
                    followingId:user.userId
                }
            },
            _count: {
                select: {
                    followers: true,
                    following: true,
                    posts: true
                }
            },
        },
        where: {id}
    })
    
    const data = { ...user, ...count!,isme:id===user.userId }
    return data;
}) satisfies PageServerLoad;