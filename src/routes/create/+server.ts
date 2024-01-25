import prisma from '$lib/prisma';
import type { User } from '$lib/type';
import { writeFileSync } from 'fs';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ locals, request }) => {
    const { text, files } = await request.json() as { text: string; files:File[]};
    const { user } = await locals.auth.validate() as User
    const error = []
    const parsedFiles: { content: string; size: number; type: string; }[] = [];

    if (files && files.length > 4) {
        return new Response("too many files uploaded, max files alllowed is 4",{status:400})
    }
    files.forEach(async (file) => {
        const typeRegex = new RegExp("image/*,video/*".replace(/\*/g, "./*").replace(/,/g, "|"))

        if (!typeRegex.test(file.type)) {
            error.push(`file type of ${file.type.split("/")[1]} is not allowed in ${file.name}`)
        }

        const newFileName = new Date().getTime().toString(64) + file.name
        
        writeFileSync("static/uploaded/" + newFileName, Buffer.from(await file.arrayBuffer()))
        parsedFiles.push({content:newFileName,size:file.size,type:file.type.split("/")[0]})
    });
    prisma.post.create({
        data: {
            content: text,
            authorId: user.userId,
            medias: {
                createMany: {
                    data: parsedFiles
                }
            }
        }
    })
    return new Response("uploaded successfully",{status:200});
};