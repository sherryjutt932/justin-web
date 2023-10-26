import React, { useLayoutEffect, useRef } from "react";
import clsx from "clsx";
import data from "./data";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Boxes() {
  const icons = data();
  const boxesSec = useRef();
  const boxesRef = useRef();

  useLayoutEffect(() => {
    var tl = gsap.timeline();

    if (boxesRef.current) {
      const boxesArray = Array.from(boxesRef.current.children);

      for (let index = 0; index < boxesArray.length; index++) {
        gsap.set(boxesArray[index], {
          xPercent: -100 * index,
          zIndex: boxesArray.length - index,
        });
      }

      for (let index = 0; index < boxesArray.length; index++) {
        const child = boxesArray[index];
        tl.to(
          child,
          {
            xPercent: 0,
            ease: "none",
          },
          "a"
        );
      }
    }

    ScrollTrigger.create({
      trigger: boxesSec.current,
      start: "top 60%",
      end: "top 30%",
      scrub: true,
      animation: tl,
    });
  }, []);

  return (
    <section
      ref={boxesSec}
      className=" h-fit w-full relative pt-20 font-Satoshi"
    >
      <div ref={boxesRef} className="flex">
        {icons.map((item, index) => {
          return (
            <div
              key={index}
              className={clsx(
                index === 3 ? "border-y" : "border-y border-r",
                "border-gray-c5 bg-main aspect-[1.25] flex-1 flex justify-center items-center relative"
              )}
            >
              <div className="absolute top-5 left-5 w-full h-fit">
                <span className="inline-block w-3 h-3 text-[20px] rounded-full bg-dark mr-2"></span>
                0{index + 1}
              </div>

              <div className="text-[24px] uppercase flex flex-col gap-10 justify-center items-center">
                <div className="border border-dark p-2 w-fit">
                  <img src={item.img} alt="" />
                </div>
                <div>{item.label}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
