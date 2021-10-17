import React, { useEffect } from "react"
import hoverEffect from "hover-effect"
import img1 from "../assets/images/01.png"
import img2 from "../assets/images/02.png"
import img3 from "../assets/images/diss.png"
import { gsap } from "gsap"

const WithAnimation = ({children}) => {

  useEffect(() => {
    new hoverEffect({
      parent: document.querySelector('.distortion'),
      intensity: 0.2,
      image1: img1,
      image2: img2,
      displacementImage: img3,
      imagesRatio: 380 / 300
    })

    // NAVBAR
    gsap.to(".navbar div", {
      delay: 1.5,
      opacity: 0,
      y: "20",
      ease: 'ease-in-out',
      stagger: 0.08
    });

    // MEDIA
    gsap.to(".media ul li", {
      delay: 1.5,
      opacity: 0,
      x: "-20",
      ease: 'ease-in-out',
      stagger: 0.08
    });

    // TEXT
    gsap.from(".text h1 .hidetext", {
      delay: 1,
      y: "100%",
      ease: 'ease-in-out'
    });

    gsap.from(".text h3 .hidetext", {
      delay: 1.2,
      y: "100%",
      ease: 'ease-in-out'
    });

    gsap.from(".text p .hidetext", {
      delay: 1.3,
      y: "100%",
      ease: 'ease-in-out'
    });

    gsap.from(".text h2", {
      delay: 1.5,
      opacity: 0,
      x: "-10000",
      ease: 'ease-in-out'
    });

    // SPONSOR
    gsap.from(".sponsor img", {
      delay: 1.5,
      opacity: 0,
      y: "20",
      ease: 'ease-in-out'
    });

    gsap.from(".sponsor p", {
      delay: 1.6,
      opacity: 0,
      y: "20",
      ease: 'ease-in-out'
    });

    // DISTORTION
    gsap.from(".distortion", {
      delay: 2,
      opacity: 0,
      y: "20",
      ease: 'ease-in-out'
    });

    // OVERLAY
    gsap.to(".first", {
      delay: .5,
      top: "-100%",
      ease: 'ease-in-out'
    });

    gsap.to(".second", {
      delay: .7,
      top: "-100%",
      ease: 'ease-in-out'
    });

    gsap.to(".third", {
      delay: .9,
      top: "-100%",
      ease: 'ease-in-out'
    });
  }, [])

  return (
    <>
      {children}
    </>
  )
}

export default WithAnimation