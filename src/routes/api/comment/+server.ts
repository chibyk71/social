import prisma from '$lib/prisma';
import { json, type RequestHandler } from '@sveltejs/kit';



export const POST: RequestHandler = async ({ request, locals }) => {
    const session = await locals.auth.validate(); 
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
                    id:true,
                    content: true,
                    author: {
                        select: {
                            name: true,
                            avatar: true,
                            id: true,
                        }
                    },
                    createdAt: true,
                    _count: {
                        select: {
                            likes: true,
                        }
                    },
                    likes: {
                        where: {
                            userId: session?.user.userId,
                        },
                        select: {
                            id: true
                        }
                    }
                },
                take: 3,
                orderBy: {
                    createdAt: "desc"
                }
            },
            _count: {
                select: {
                    likes: true,
                    replies: true
                }
            },
            likes: {
                select: {
                    id: true,
                },
                where: {
                    userId: session?.user.userId
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