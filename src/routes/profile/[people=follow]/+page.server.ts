import prisma from "$lib/prisma";
import type { User } from "$lib/type";
import type { PageServerLoad } from "./$types";

export const load = (async ({ locals }) => {
    const session = await locals.auth.validate() as User;    
    
    const data = await prisma.user.findUnique({
        select: {
            followers: {
                select: {
                    from: {
                        select: {
                            name: true,
                            username: true,
                            avatar: true,
                            id: true,
                            _count: {
                                select: {
                                    followers: {
                                        where:{followerId:session.user.userId}
                                    }
                                }
                            }
                        }, 
                    }
                },
                take:20
            },
            following: {
                select: {
                    to: {
                        select: {
                        name: true,
                        username: true,
                        avatar: true,
                        id: true,
                    }}
                },
                take: 20
            },
            _count: {
                select: {
                    followers: true,
                    following:true
                }
            }
        },
        where: {
          id:session.user.userId
        }
    })
    
    return { ...data,...session };
}) satisfies PageServerLoad