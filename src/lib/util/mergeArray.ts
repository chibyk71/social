export const mergeArray = <T extends Record<string, unknown>>(a:T,b:T):T => {
    const c:{[x:string]:unknown} = {};
    Object.keys({...a,...b}).map(key =>{
        c[key] = a[key]||b[key]
    })

    return c as T
}