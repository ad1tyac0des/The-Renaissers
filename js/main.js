import { preloader } from "./modules/preloader.js";
import { footerTextAnimation } from "./modules/footerTextAnimation.js"

document.addEventListener("DOMContentLoaded", () => {
    const scroll = new LocomotiveScroll();

    preloader();
    footerTextAnimation();
});
