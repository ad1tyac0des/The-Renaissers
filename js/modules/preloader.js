import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export function preloader() {
    const tl = gsap.timeline();
    const preloaderHeadings = new SplitText(".preloader-headings", { type: "words", mask: "words", ignore: "span" });
    const preloaderSubheading = new SplitText(".preloader-subheading", { type: "words", mask: "words", ignore: "span" });
    const preloaderBarText = new SplitText(".preloader-bar-text", { type: "words", mask: "words" });
    const heroHeadings = new SplitText(".hero-headings", { type: "words", mask: "words", ignore: "span" });

    tl.from(preloaderHeadings.words, {
        opacity: 0,
        y: 100,
        stagger: 0.2,
        duration: 1,
        ease: "power2.inOut",
    }).from(preloaderSubheading.words, {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        ease: "power2.inOut",
    }).from(".preloader-subheading-divider", {
        opacity: 0,
        stagger: 0.1,
        ease: "power2.inOut",
    }).from(preloaderBarText.words, {
        opacity: 0,
        y: 70,
        stagger: 0.1,
        duration: 1,
        ease: "power2.inOut",
    }).to("#preloader-bar-filler", {
        width: "100%",
        duration: 3,
        ease: "power2.inOut",
        onUpdate: () => {
            const preloaderBarTextNumber = document.getElementById("preloader-bar-text-number");
            setInterval(() => {
                preloaderBarTextNumber.textContent = Math.round((tl.progress() * 100) + 10);
            }, 100);
        }
    }).to("#preloader-section", {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
    }).to("#preloader-section", {
        display: "none",
    }, "<").to("main", {
        display: "block",
    }, "<").to("main", {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
    }, "<").from("nav", {
        opacity: 0,
        y: -70,
        duration: .7,
        ease: "power2.inOut",
    }).from(heroHeadings.words, {
        opacity: 0,
        y: 100,
        stagger: 0.2,
        duration: 1,
        ease: "power2.inOut",
    })
        
}