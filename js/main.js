import { preloader } from "./modules/preloader.js";
import { footerTextAnimation } from "./modules/footerTextAnimation.js"

document.addEventListener("DOMContentLoaded", () => {
    preloader();
    footerTextAnimation();
});
