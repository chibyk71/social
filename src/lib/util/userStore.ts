import { writable } from "svelte/store";

export type UserType = {
    [x:string]:unknown
    id?: number;
    name?: string;
    email?: string;
    image?: string;
    type?: "admin" | "user";
    phone?: number;
    verified?: boolean;
}|null

const { subscribe, set, update } = writable<Exclude<UserType,null>>({});
export const User = {
    subscribe,
    set,
    update,
    /** Append to end of queue. */
    add: (key:string,value: unknown) => update((cStore) => {
        cStore[key] = value
        return cStore;
    }),
    /** Remove all items from queue. */
    clear: () => update(() => {
        return {}
    })
}