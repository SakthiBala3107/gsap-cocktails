// import React from 'react'

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const videoRef = useRef();

  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((char) => {
      char.classList.add("text-gradient");
    });

    //TITLE-ANIMATIONS
    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      // scrub:true
    });

    //Text-Para Animations
    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });

    //LEFT, RIGHT-LEAF ANIMATIONS
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0);

    //consts
    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "120% top" : "bottom top";

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });

    /*
1. videoRef = div contains the Video 

2. videoRef.current = the actual video

3. videoRef.current.duration = the actual video duration

4. videoRef.onloadedmetaData = contains the video details(vid-len, size, resolution)

5. currenttime = the vidoe starts at 0 and ends at the  video actual time

*/

    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration,
      });
    };
  }, []);

  //RENDERING-STUFFS
  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">Mojito</h1>

        <img
          className="left-leaf"
          src="public/images/hero-left-leaf.png"
          alt="left-leaf"
        />

        <img
          className="right-leaf"
          src="public/images/hero-right-leaf.png"
          alt="right-leaf"
        />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisp. Classic.</p>
              <p className="subtitle">
                Sip the Spirit <br /> of Summer
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients,
                creative, flair, and timeless receipes - designed to delight
                your senses.
              </p>
              <a href="#cocktails">View Cocktails</a>
            </div>
          </div>
        </div>
      </section>
      <div className="video absolute inset-0">
        <video
          ref={videoRef}
          src="/videos/output.mp4"
          playsInline
          preload="auto"
          muted
        />
      </div>
    </>
  );
};

export default Hero;
