import prisma from '$lib/prisma';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request,locals }) => {
    const { id,action } = await request.json()
    const session = await locals.auth.validate()
    if (!session) {
        return new Response("user needs to e singen in to perform action",{status:403,statusText:"not authorized"})
    }
    let exist;
    if (action === "follow") {
        exist = await prisma.followingConnection.create({
            data: {
                followerId: session.user.userId,
                followingId: id
            }
        })
    }else if (action === "unfollow") {
        exist = await prisma.followingConnection.delete({
            where:{id:id}
        })
    }
    return json(exist,{status:200});
};