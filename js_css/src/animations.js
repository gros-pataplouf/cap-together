import gsap from "gsap";

console.log('hello from animations.js')

const animate = () => {
        const gsapHeader = document.querySelector("#gsapHeader")
        gsap.to(
            gsapHeader, {
                duration: 4, 
                color: "red"
            }
        )

}

animate()