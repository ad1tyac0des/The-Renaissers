import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export async function handleSectionHeadingScrollAnimations() {
    // Wait for fonts to load
    await document.fonts.ready;
        const sectionHeadings = document.querySelectorAll(".section-heading");
    
    sectionHeadings.forEach((heading) => {
        const headingSplitText = new SplitText(heading, { 
            type: "words", 
            mask: "words", 
            ignore: "span" 
        });

        gsap.from(headingSplitText.words, {
            scrollTrigger: {
                trigger: heading,
                start: "top center+=20%",
                end: "bottom bottom",
                // markers: true,
            },
            autoAlpha: 0,
            y: 100,
            duration: .7,
            ease: "power2.in",
        });
    });
}