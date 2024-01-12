import type { TransitionParams } from "$lib/type";
import { linear } from "svelte/easing";

export const slideVertical = (node:HTMLElement,option: TransitionParams & {dir?:"down"|"up" }) => {
    const existingTransform = getComputedStyle(node).transform.replace('none', '');
    const from = option.dir === "up" ? 100 : -100;
    return {
        delay: option.delay || 0,
        duration: option.duration || 400,
        easing: option.easing || linear,
        css: (t: number, u: number) => `opacity:${t};transform: ${existingTransform} translateY(${u * from}%)`
    };
}