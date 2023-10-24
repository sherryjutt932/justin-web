import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Navbar from "../Navbar/index.jsx";
import Head from "./Head";
import Skills from "../Skills/index.jsx";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const hero = useRef();
  const heroSec = useRef();
  const heroBg = useRef();
  const circle = useRef();
  const circleBg = useRef();
  const [circleLoc, setCircleLoc] = useState({ left: 0, top: 0 });

  function setCirclePosition() {
    const element = circleBg.current;
    if (element) {
      requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        setCircleLoc({
          left: rect.left + rect.width / 2,
          top: rect.top + window.scrollY + rect.height / 2,
        });
      });
    }
  }

  useLayoutEffect(() => {
    setTimeout(() => {
      setCirclePosition();
    }, 100);

    window.addEventListener("resize", setCirclePosition);
    return () => {
      window.removeEventListener("resize", setCirclePosition);
    };
  }, []);

  useEffect(() => {
    var tl = gsap.timeline();
    tl.fromTo(
      heroBg.current,
      {
        clipPath: `circle(0% at ${circleLoc.left}px ${circleLoc.top}px)`,
      },
      {
        clipPath: `circle(200% at ${circleLoc.left}px ${circleLoc.top}px)`,
      }
    );

    ScrollTrigger.create({
      trigger: heroSec.current,
      start: "top top",
      end: "bottom 60%",
      scrub: 1,
      animation: tl,
      // pin:true,
    });

    return () => {
      tl.kill();
    };
  }, [circleLoc]);

  return (
    <section
      ref={heroSec}
      className="heroSection w-full relative overflow-hidden px-16 2xl:px-32"
    >
      <div
        ref={hero}
        className="hero w-full h-full
      flex flex-col text-black items-center"
      >
        <Navbar theme="light" />
        <Head theme="light" ref={circle} />
        <Skills />
      </div>

      <div
        ref={heroBg}
        style={{ clipPath: "circle(0% at 50% 50%)" }}
        className="heroBg w-full h-full
        flex flex-col items-center text-white bg-black absolute top-0 left-0"
      >
        <Navbar theme="dark" />
        <Head theme="dark" ref={circleBg} />
      </div>
    </section>
  );
}
