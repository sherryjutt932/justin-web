import React, { useLayoutEffect, useRef } from "react";
import specialize from "../../assests/icons/specialize.svg";
import crafting from "../../assests/icons/crafting.svg";
import products from "../../assests/icons/products.svg";
import care from "../../assests/icons/care.svg";
import steric from "../../assests/icons/steric.svg";
import ScrollerItem from "./ScrollerItem";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const aboutRef = useRef();
  const aboutSec = useRef();
  const stericRef = useRef();

  useLayoutEffect(() => {
    // GSAP animation for the steric rotation
    gsap.to(stericRef.current, {
      rotation: 360,
      duration: 30,
      repeat: -1,
      ease: "linear",
    });

    //GSAP animation for the horizontal scrolling
    gsap.timeline( {
      scrollTrigger: {
        trigger: aboutSec.current,
        start: "top top",
        end: () => "+=" + aboutSec.current.offsetWidth * 1.5,
        scrub: true,
        pin: true,
      }
    }).to(
      aboutRef.current,
      {
        xPercent: -80,
    ease: "none",
      },"a"
    );
  }, []);

  return (
    <section ref={aboutSec} 
    className="w-full h-screen overflow-hidden bg-main">
      <div className=" heroSection h-screen w-full relative px-16 2xl:px-32 py-12 flex flex-col justify-between">
        {/* heading */}
        <div className="font-Satoshi text-xl">
          <span className="inline-block w-3 h-3 rounded-full bg-dark mr-2"></span>
          About us
        </div>

        {/* horizontal scroller */}
        <div
          ref={aboutRef}
          className="w-fit text-6xl m14:text-[80px] uppercase flex flex-nowrap"
        >
          <div>
            <div>At our agency,</div>
            <div className="flex whitespace-nowrap flex-nowrap items-center mt-4 2xl:mt-8">
              <ScrollerItem
                text="We specialize"
                imageSrc={specialize}
                altText="specialize"
              />
              <ScrollerItem
                text="In crafting"
                imageSrc={crafting}
                altText="crafting"
              />
              <ScrollerItem
                text="Digital products"
                imageSrc={products}
                altText="products"
              />
              <ScrollerItem
                text="With great care"
                imageSrc={care}
                altText="care"
              />
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
            <img
              ref={stericRef}
              src={steric}
              className="w-full h-full"
              alt="steric"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
