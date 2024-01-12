export const goBack = (node:HTMLElement) => {
    node.addEventListener("click", () => {
        window.history.go(-1)
    })
} 