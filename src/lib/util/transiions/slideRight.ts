import type { TransitionParams } from "$lib/type";
import { linear } from "svelte/easing";

export const slideRight = (node:HTMLElement, params: TransitionParams) => {
    const existingTransform = getComputedStyle(node).transform.replace('none','');
    return {
        delay: params.delay || 0,
        duration: params.duration || 400,
        easing: params.easing || linear,
        css: (t:number,u:number) => `opacity:${t};transform: ${existingTransform} translateX(${u * -100}%)`
    };

}