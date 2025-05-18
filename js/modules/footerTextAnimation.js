let text = document.querySelectorAll(".texts")
const textAnimation = () => {
    text.forEach(texts => {
        var underline = texts.querySelector(".footer-text-underline")

        texts.addEventListener("mouseenter", function () {
            underline.style.transformOrigin = "left"
            underline.style.transform = "scaleX(1)"
           
        })
        texts.addEventListener("mouseleave", function () {
            underline.style.transformOrigin = "right"
            underline.style.transform = "scaleX(0)"
        
        })
    });
}

export { textAnimation as footerTextAnimation };