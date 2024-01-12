<script lang="ts">
	import { executeAfterTransition } from "../util/transitonEnd";
	import { createEventDispatcher, onMount } from "svelte";

    const despatcher =  createEventDispatcher()
    const CLASS_NAME_FADE = 'fade'
    const CLASS_NAME_HIDE = 'hide'
    const CLASS_NAME_SHOW = 'show'
    const CLASS_NAME_SHOWING = 'showing'
    let element:HTMLElement, mounted= false;
    export let rounded = "";
    export let autohide = true;
    export let delay = 1500
    export let background = "";
    export let animation = true

    let timeout:NodeJS.Timeout,
    hasMouseInteraction = false,
    hasKeyboardInteraction = false;

    const show = () => {
        const showEvent = despatcher("show","", { cancelable:true })

        if (!showEvent) {
            console.log("canceled");
            
            return
        }

        clearTimeout(timeout)

        if (animation) {
            element.classList.add(CLASS_NAME_FADE)
        }

        const complete = () => {
        element.classList.remove(CLASS_NAME_SHOWING)
        element.classList.add(CLASS_NAME_SHOW)

        despatcher("shown")

        maybeScheduleHide()
        }

        element.classList.remove(CLASS_NAME_HIDE)
        reflow(element)
        element.classList.add(CLASS_NAME_SHOWING)

        executeAfterTransition(complete, element, animation)
    }

    const reflow = (element:HTMLElement) => element.offsetHeight

    const hide = () => {
        if (!element.classList.contains(CLASS_NAME_SHOW)) {
            return
        }

        const hideEvent = despatcher("hide","", { cancelable:true })

        if (!hideEvent) {
            return
        }

        const complete = () => {
            element.classList.add(CLASS_NAME_HIDE)
            despatcher("hidden")
        }

        element.classList.remove(CLASS_NAME_SHOW)
        executeAfterTransition(complete, element, animation)
    }

	function maybeScheduleHide() {
		if (!autohide) {
            return
        }

        if (hasMouseInteraction || hasKeyboardInteraction) {
            return
        }

        timeout = setTimeout(() => {
            hide()
        }, delay)
    
	}

    const onInteraction = (event:Event) => {
        let isInteracting:boolean;
        switch (event.type) {
            case 'mouseover':
            case 'focusin':
                isInteracting = true;
                break
            case 'mouseout':
            case 'focusout':
                isInteracting = false
                break
            default:
                isInteracting = false
                break
        }
        hasMouseInteraction = hasKeyboardInteraction =  isInteracting
        if (isInteracting) {
            clearTimeout(timeout)
            return
        }

        const nextElement = (event as MouseEvent).relatedTarget
        if (element === nextElement || element.contains(nextElement as Node)) {
            return
        }

        maybeScheduleHide()
    }

  onMount(() =>{

    ["focusin","focusout","mouseout","mouseover"].forEach((ev) =>{
        element.addEventListener(ev , onInteraction)
    })
  })

  export function open() {
    show();
  }
</script>

<div bind:this={element} class="snackbar-toast rounded-m bg-highlight color-white fade hide">
    <i class="fa fa-sync fa-spin me-3"></i>Processing...
</div>

<style>
    .snackbar-toast {
        bottom: 70px!important;
        bottom: calc(70px + (constant(safe-area-inset-bottom))*1.1)!important;
        bottom: calc(70px + (env(safe-area-inset-bottom))*1.1)!important;
        position: fixed;
        left: 10px!important;
        right: 10px!important;
        padding: 0 18px;
        line-height: 50px;
        border-radius: 8px;
        overflow: hidden;
        z-index: 95;
        transform: translateY(100px);
        transition: all 350ms ease;
    }

    .bg-highlight{
        background-color: red;
    }

    .fade:global(.show) {
        transform: translateY(0)
    }

    .fade:not(.show) {
        opacity: 0;
    }

    /* .hide {
        display: none;
    } */
</style>