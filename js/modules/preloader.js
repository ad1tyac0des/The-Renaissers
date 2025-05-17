import gsap from "gsap";
import { animate } from "animejs";

export function preloader() {
    console.log("preloader");

    // gsap.from("#preloader-section", {
    //     opacity: 0,
    //     duration: 2,
    //     ease: "power2.inOut"
    // });

    animate("#preloader-section", {
        opacity: [0, 1],
        duration: 2000,
        ease: "inOutSine"
    });
}