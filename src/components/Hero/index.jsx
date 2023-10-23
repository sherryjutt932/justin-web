import React, { useState, useEffect, useRef } from "react";
import Marquee from "./Marquee2";
import Navbar from "../Navbar/index.jsx";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroSec = useRef();
  const hero = useRef();
  const heroBg = useRef();
  const circle = useRef();
  const circleBg = useRef();
  const [circleLoc, setcircleLoc] = useState({ left: 0, top: 0 });

  function setCirclePosition() {
    const element = circleBg.current;
    if (element) {
      requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        setcircleLoc({
          left: rect.left + rect.width / 2,
          top: rect.top + window.scrollY + rect.height / 2,
        });
      });
    }
  }

  useEffect(() => {
    var tl = gsap.timeline();
    tl.fromTo(
      heroBg.current,
      //
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

  useEffect(() => {
    setCirclePosition();
    window.addEventListener("resize", setCirclePosition);
    return () => {
      window.removeEventListener("resize", setCirclePosition);
    };
  }, []);

  return (
    <section
      ref={heroSec}
      className="heroSection w-full h-[200vh] relative overflow-hidden"
    >
      <div
        ref={hero}
        className="hero w-full h-full
      flex px-16 2xl:px-32 flex-col text-black bg-white items-center"
      >
        <Navbar theme="light" />
        <div className=" text-[6rem] 2xl:text-[8rem] h-[calc(100vh-6rem)] leading-none flex items-center py-12">
          <div>
            Your Trusted Partner <br />
            For Your{" "}
            <span
              ref={circle}
              className="circle w-[4rem] aspect-square inline-block rounded-full align-baseline bg-black"
            ></span>
            nline{" "}
            <Marquee direction={"left"} speed={1}>
              Business *
            </Marquee>
            <br />
            Success
            <div className="w-full flex 2xl:mt-16">
              <div className="w-[55%]"></div>
              <div className="w-[45%] text-base pr-[10%]">
                <p>
                Our top priority is to provide exceptional support to our clients throughout their entire project journey. Our team is readily accessible to address any inquiries.
                </p>
                <a
                  className="mt-4 block font-semibold underline underline-offset-4 uppercase"
                  href="/"
                >
                  Learn More
                  <button className="border border-black ml-6 bg-white px-6 py-1 rounded-full">
                    {">"}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="h-screen py-24 bg-white w-full text-6xl text-black text-center">
          We Bring Skills,
          <br />
          You Achieve Results
        </div>
      </div>
      
      <div
        ref={heroBg}
        style={{ clipPath: "circle(0% at 50% 50%)" }}
        className="heroBg w-full h-full
        flex px-16 flex-col items-center text-white bg-black absolute top-0 left-0"
      >
        <Navbar theme="dark" />
        <div className="text-[6rem] h-[calc(100vh-6rem)] leading-none flex items-center py-12">
          <div>
            Your Trusted Partner <br />
            For Your{" "}
            <span
              ref={circleBg}
              className="circle w-[4rem] aspect-square inline-block rounded-full align-baseline bg-[#fa1b1b]"
            ></span>
            nline{" "}
            <Marquee direction={"left"} speed={1}>
              Business *
            </Marquee>
            <br />
            Success

            <div className="w-full flex text-white">
              <div className="w-[55%]"></div>
              <div className="w-[45%] text-base pr-[10%]">
                <p>
                Our top priority is to provide exceptional support to our clients throughout their entire project journey. Our team is readily accessible to address any inquiries.
                </p>
                <a
                  className="mt-4 block font-semibold underline underline-offset-4 uppercase"
                  href="/"
                >
                  Learn More
                  <button className="text-black border border-black ml-6 bg-white px-6 py-1 rounded-full">
                    {">"}
                  </button>
                </a>
              </div>
            </div>

          </div>
        </div>

        <div className="h-screen py-24 bg-black w-full text-6xl text-white text-center">
          We Bring Skills,
          <br />
          You Achieve Results
        </div>
      </div>
    </section>
  );
}
