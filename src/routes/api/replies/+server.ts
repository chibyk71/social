import prisma from '$lib/prisma';
import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request,locals }) => {
    const { id, offset } = Object.fromEntries(await request.json()),
        session = await locals.auth.validate()
    
    const data = await prisma.reply.findMany({
        where: {
            id:id
        },
        select: {
            id: true,
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
        take: 6,
        skip: 3 + (offset-1 * 6),
        orderBy: {
            createdAt: "desc"
        }
    })
    
    return json(data);
};