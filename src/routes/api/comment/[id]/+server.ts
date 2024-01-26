import prisma from "$lib/prisma";
import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ params,locals }) => {
    const session = await locals.auth.validate()

    if (!session) {
        return
    }
    prisma.commentLike.upsert({
        where: {
            id: BigInt(params.id!)
        },
        create: {
            commentId: BigInt(params.id!),
            userId: session.user.userId
        },
        update: {
            
        }
    })
    return new Response();
};