export function bgImage(node: HTMLImageElement) {
    if (node.complete) {
        const parent = node.closest(".bg-img") as HTMLElement;
        if (parent && parent !== null) {
            const src = node.src;
            parent.style.backgroundImage = `url('${src}')`;
            node.remove()
        }
    }

    // if (document.querySelectorAll(".blur-up").length > 0) {
    //     _el(".blur-up").each((node: HTMLElement) => {
    //         _el(node).removeClass("blur-up", "lazyload");
    //     });
    // }
}