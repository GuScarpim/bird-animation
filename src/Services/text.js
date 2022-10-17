import { gsap, Power3 } from "gsap/all"

export default function TextEffect() {
  let tlH1 = gsap.timeline()
  let tlH2 = gsap.timeline()

  tlH1.from("h1 span>span", {
    duration: 0.75,
    y: 150,
    ease: Power3.out,
    stagger: 1,
  })

  tlH2.from("h2 label>label", {
    duration: 0.75,
    y: 150,
    ease: Power3.out,
    stagger: 1,
  })
}