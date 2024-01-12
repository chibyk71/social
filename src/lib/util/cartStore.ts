import { browser } from "$app/environment";
import { derived, writable } from "svelte/store";

export type cartVal = {
    id: number;
    name: string;
    quantity: number;
    image: string;
    price: number;
}
const persistedCart = browser? localStorage.getItem("cart"):"[]";
const { subscribe, set, update } = writable<cartVal[]>(persistedCart ? JSON.parse(persistedCart) : []);

browser ?? subscribe((cart) => {
    localStorage.setItem("cart",JSON.stringify(cart))
})
export const cart =  {
    subscribe,
    set,
    update,
    /** Append to end of queue. */
    add: (value: cartVal) => update((cStore) => {
        const exist = cStore.findIndex(((key) => key.id === value.id))
        if (exist >= 0) {
            const prev = cStore[exist];
            prev.quantity += 1;
            cStore[exist] =prev;
        } else {
            cStore.push(value);
        }
        return cStore;
    }),
    /** Prepend to the top of the queue  */
    delete: (id: number) => update((cStore) => {
        cStore = cStore.filter(key => key.id === id);
        return cStore;
    }),
    /** updates the quanty of the cart item */
    increase: (id: number, quantity: number) => update((cStore) => {
        return cStore.filter(v => {
            if (v.id === id) {
                v.quantity = quantity
            }
            return true;
        });
    }),
    /** Remove all items from queue. */
    clear: () => update(() => {
       return []
    })
};

export const total = derived(cart, ($cart) => {
    let t = 0;
    $cart.forEach(v => {
        t += v.price * v.quantity;
    })
    return t;
})