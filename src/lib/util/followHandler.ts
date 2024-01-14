/** 
 * sends a post request tithe server to create or delete an entry in the followConnection table
 * @param {String} id the id of the user ou wish to follow
 * @param {follow|unfollow} action the acion that is to be performed
 * @param {Function} callback callbak function called after tde request is finished
 */

export const handleFollow = async (id: string, action: string, callback?: (res: boolean) => void) => {
    const res = await fetch("/api/follow/", { method: "post", body: JSON.stringify({ id, action }) }).then((res) => {
        return res.status === 200
    })

    if (callback && typeof callback === "function") {
        callback(res)
    }
}