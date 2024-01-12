import { auth } from "$lib/server/lacia";
import type { Handle } from "@sveltejs/kit";
export const handle: Handle = async ({ event, resolve }) => {
    
    event.locals.auth = auth.handleRequest(event);
    const theme: string = event.cookies.get("theme")??"light"

    // if (event.url.pathname.startsWith('/auth')) {
    //     throw redirect(302, "/")
    // }
    return resolve(event, {
        transformPageChunk({html}) {
            return html.replace(/(light|dark)/,theme)
        },
    })
}