import { writable } from "svelte/store";

const {subscribe,update,set} = writable<string[]>([]);

export const canvas = {
    subscribe,
    update,
    set,
    open: (id: string) => {
        update(items => {
            if (items.includes(id)) {
                if (items[0]== id) {
                    return items
                }

                items = items.filter((v) => {
                    return v !== id
                })
            }
            items.unshift(id)
            return items
        })
    },
    close: (id?: string) => {
        update(item => {
            if (id && item.includes(id)) {
                item = item.filter((v) => {
                  return v != id
              })  
            } else {
                item.shift()
            }
            return item
        })
    },
    recreate: (id:string) => {
      set([id])  
    },
    clear: () => {
        set([])
    }
}