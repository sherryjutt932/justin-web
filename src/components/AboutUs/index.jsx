import React, { useEffect, useRef } from "react";
import specialize from "../../assests/icons/specialize.svg";
import crafting from "../../assests/icons/crafting.svg";
import products from "../../assests/icons/products.svg";
import care from "../../assests/icons/care.svg";
import steric from "../../assests/icons/steric.svg";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const aboutRef = useRef();
  const aboutSec = useRef();

  useEffect(() => {
    gsap.to(aboutRef.current, {
      xPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: aboutSec.current,
        start: "top top",
        // end: () => "+=" + aboutSec.current.offsetWidth,
        scrub: true,
        // pin: true,
      },
    });
  }, []);

  return (
    <section ref={aboutSec} className="w-full h-screen overflow-hidden">
      <div className="border-2 border-sec heroSection h-screen w-full relative px-16 2xl:px-32 py-10 flex flex-col justify-between">
        {/* heading */}
        <div className="font-Satoshi text-xl">
          <span className="inline-block w-3 h-3 rounded-full bg-dark"></span>{" "}
          About us
        </div>

        {/* horizontal scroller */}
        <div
          ref={aboutRef}
          className="w-fit bg-sec text-6xl m14:text-[80px] uppercase flex flex-nowrap"
        >
          <div>
            <div>At our agency,</div>
            <div className="flex whitespace-nowrap flex-nowrap items-center mt-4 2xl:mt-8">
              <div className="shrink-0">
                We specialize
                <div className="inline-block align-middle mx-10">
                  <img src={specialize} alt="specialize" />
                </div>
              </div>

              <div className="shrink-0">
                In crafting
                <div className="inline-block align-middle mx-10">
                  <img src={crafting} alt="crafting" />
                </div>
              </div>

              <div className="shrink-0">
                Digital products
                <div className="inline-block align-middle mx-10">
                  <img src={products} alt="prducts" />
                </div>
              </div>

              <div className="shrink-0">
                With great care
                <div className="inline-block align-middle mx-10">
                  <img src={care} alt="care" />
                </div>
              </div>

              <div>Check our portfolio</div>
            </div>
          </div>
        </div>

        {/* detail */}
        <div className="flex flex-row-reverse m14:flex-col">
          <div className="flex-1 h-fit flex justify-end">
            <p className="max-w-xl font-Satoshi text-2xl leading-9 mr-24">
              Every project we undertake is carefully crafted with a keen eye
              for detail and a passion for excellence. It's time to embark on an
              extraordinary creative adventure together!
            </p>
          </div>

          <div className="h-44 m14:h-64 w-fit 2xl:mb-16">
            <img src={steric} className="w-full h-full" alt="steric" />
          </div>
        </div>
      </div>
    </section>
  );
}
