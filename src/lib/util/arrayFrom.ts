
/** create and returns an array with numbers fron {step} and length of {num} */
export const arrayFrom = (num: number, start = 1, step = 1) => {
    return [...[...Array(num).keys()].map((v, j) => start + (j * step))]
}