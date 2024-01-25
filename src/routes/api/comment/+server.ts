import prisma from '$lib/prisma';
import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
    const req = await request.json();
    const { id, offset } = req;

    const response = await prisma.comment.findMany({
        where: {
            postId: id
        },
        select: {
            id: true,
            author: {
                select: {
                    name: true,
                    avatar: true,
                    id: true,
                }
            },
            content: true,
            createdAt: true,
            replies: {
                select: {
                    content: true,
                    author: {
                        select: {
                            name: true,
                            avatar: true,
                            id: true,
                        }
                    },
                    createdAt:true,
                },
                take: 3,
                orderBy: {
                    createdAt: "desc"
                }
            }
        },
        take: 15,
        skip: offset * 15,
        orderBy: {
            createdAt:"desc"
        }
    })

    return json(response,{status:200});
};