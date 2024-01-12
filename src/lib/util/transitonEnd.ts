
const TRANSITION_END = 'transitionend';

export const executeAfterTransition = (callback: ()=>void, transitionElement: HTMLElement|Element, waitForTransition = true) => {
    if (!waitForTransition) {
        execute(callback)
        return
    }

    const durationPadding = 5
    const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding

    let called = false

    const handler = (e: Event) => {
        if (e.target !== transitionElement) {
            return
        }

        called = true
        transitionElement.removeEventListener(TRANSITION_END, handler)
        execute(callback)
    }

    transitionElement.addEventListener(TRANSITION_END, handler)
    setTimeout(() => {
        if (!called) {
            triggerTransitionEnd(transitionElement)
        }
    }, emulatedDuration)
}

const execute = (callback: () => void) => {
    if (typeof callback === 'function') {
        callback()
    }
}

const getTransitionDurationFromElement = (element: Element) => {
    if (!element) {
        return 0
    }

    // Get transition-duration of the element
    let { transitionDuration, transitionDelay } = window.getComputedStyle(element)

    const floatTransitionDuration = Number.parseFloat(transitionDuration)
    const floatTransitionDelay = Number.parseFloat(transitionDelay)

    // Return 0 if element or transition duration is not found
    if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0
    }

    // If multiple durations are defined, take the first
    transitionDuration = transitionDuration.split(',')[0]
    transitionDelay = transitionDelay.split(',')[0]

    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * 1000
}

const triggerTransitionEnd = (element:Element) => {
    element.dispatchEvent(new Event(TRANSITION_END))
}