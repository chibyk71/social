import { browser } from "$app/environment";
import { writable } from "svelte/store";

export const IsDark = writable<boolean>(false)
if (browser) {
    const theme = localStorage.getItem("custom-Theme") === "dark";
    IsDark.set(theme);
    setTimeout(async () => {
        IsDark.subscribe((value) => {
            value ? darkTheme() : lightTheme()
        });
    },1000)
}
export const toggleTheme = (node: Element) => {
    node.addEventListener("click", () => {
        if (!document.body.classList.contains("theme-dark")) {
            IsDark.set(true)
            darkTheme();
        } else {
            lightTheme();
            IsDark.set(false)
        }
        
    })
}

export function darkTheme() {
    document.body.classList.add("dark");
    document.body.classList.remove("light", "detect-theme");
    localStorage.setItem("custom-Theme", "dark");
}

export function lightTheme() {
    document.body.classList.add("light");
    document.body.classList.remove("dark","detect-theme");
    localStorage.setItem("custom-Theme", "light");
}

export const isDarkTheme = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches || localStorage.getItem("custom-Theme") == "dark";
}

export const autoTheme = () => {
    if (isDarkTheme()) {
        darkTheme();
    }else{
        lightTheme();
    }
}