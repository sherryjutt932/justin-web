import React, { useLayoutEffect, useRef, useState } from "react";
import { DetailData, ImgData } from "./data.js";
import Detail from "./detail.jsx";
import Image from "./image.jsx";
import StickyButton from "../UI/StickyButton.jsx";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Work() {
  const workSec = useRef();
  const imgRef = useRef();
  const detailRef = useRef();
  const [currentSec, setCurrentSec] = useState(1);

  useLayoutEffect(() => {
    let updateTimer;
    var tl = gsap.timeline();

    gsap.set(detailRef.current, {
      x:
        -detailRef.current.children[0].offsetWidth *
        (detailRef.current.childNodes.length - 1),
    });

    if (imgRef.current) {
      const imgArray = Array.from(imgRef.current.children);

      for (let index = 0; index < imgArray.length; index++) {
        const child = imgArray[index];
        tl.to(
          child,
          {
            yPercent: -100 * index,
            ease: "none",
          },
          index
        );

        // Nested loop to access all previous children
        for (let prevIndex = 0; prevIndex < index; prevIndex++) {
          const prevChild = imgArray[prevIndex];

          tl.to(
            prevChild,
            {
              yPercent: -100 * index,
              ease: "none",
            },
            index
          );
        }
      }
    }

    if (detailRef.current) {
      const detailArray = Array.from(detailRef.current.children);

      for (let index = 0; index < detailArray.length; index++) {
        const child = detailArray[index];
        tl.to(
          child,
          {
            xPercent: 100 * index,
            ease: "none",
          },
          index
        );

        // Nested loop to access all previous children
        for (let prevIndex = 0; prevIndex < index; prevIndex++) {
          const prevChild = detailArray[prevIndex];

          tl.to(
            prevChild,
            {
              xPercent: 100 * index,
              opacity: 0,
              ease: "none",
            },
            index
          );
        }
      }
    }

    ScrollTrigger.create({
      trigger: workSec.current,
      start: "top top",
      end: () => `+=${imgRef.current.offsetHeight * 2}`,
      scrub: true,
      pin: true,
      animation: tl,
      invalidateOnRefresh: true,
      snap: {
        snapTo: 1 / (imgRef.current.childNodes.length - 1),
      },
      onUpdate: (self) => {
        clearTimeout(updateTimer);

        updateTimer = setTimeout(() => {
          const progress = self.progress;
          const totalItems = imgRef.current.childNodes.length;
          const currentIndex = Math.round(progress * (totalItems - 1)) + 1;

          setCurrentSec(currentIndex);
        }, 20);
      },
    });

    return () => {
      clearTimeout(updateTimer);
    };
  }, [workSec, imgRef, detailRef]);


  const buttonClasses =
    "pl-16 2xl:pl-32 pb-12 row-span-1 col-span-3 row-start-3 flex flex-col justify-center m14:justify-start ";

  return (
    <section
      ref={workSec}
      className="w-full h-screen box-border overflow-hidden"
    >
      <div className=" heroSection h-screen w-full relative  flex flex-col ">
        <span className="border-gray-c5 absolute top-0 rounded-full left-1/2 -translate-x-1/2 border-b w-[calc(100%-128px)] 2xlw-[calc(100%-256px)] block"></span>

        {/* heading */}
        <div className="px-16 2xl:px-32 pt-12 font-Satoshi text-xl flex justify-between absolute top-0 left-0 w-full h-fit">
          <div>
            <span className="inline-block w-3 h-3 rounded-full bg-dark mr-2"></span>
            Recent Work
          </div>
          <div>0{currentSec}</div>
        </div>

        {/* work grid */}
        <div className="h-full text-xl grid grid-cols-8 grid-rows-3 ">
          {/* Detail */}
          <div className=" row-span-2 col-span-3 w-full">
            <div
              ref={detailRef}
              className="h-full w-fit flex flex-nowrap flex-row-reverse"
            >
              {DetailData.map((item, index) => {
                return <Detail key={index} data={item} />;
              })}
            </div>
          </div>

          {/* sticky button */}
          <div className={buttonClasses}>
            <a className=" cursor-pointer w-fit" href="/">
              <StickyButton>
                {" "}
                <div className="w-24 2xl:w-32 aspect-square bg-sec rounded-full flex whitespace-nowrap justify-center text-base 2xl:text-[22px] items-center text-light">
                  View more
                </div>{" "}
              </StickyButton>
            </a>
          </div>

          {/* images scroller */}
          <div className=" row-span-3 col-span-5 max-h-full box-border h-full">
            <div ref={imgRef} className="w-full h-full z-10">
              {ImgData.map((item, index) => {
                return <Image key={index} src={item.img} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
