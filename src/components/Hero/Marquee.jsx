import React, { Children, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Testimonials({ children, direction, speed, ...props }) {
  const marquee = useRef();
  const first = useRef();
  const second = useRef();
  let xPercent = 0;

  const rightAnimation = () => {
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.to([first.current, second.current], {
      xPercent: xPercent,
      duration: 0,
    });
    requestAnimationFrame(rightAnimation);
    xPercent += speed / 10;
  };

  const leftAnimation = () => {
    if (xPercent < -100) {
      xPercent = 0;
    }
    gsap.to([first.current, second.current], {
      xPercent: xPercent,
      duration: 0,
    });
    requestAnimationFrame(leftAnimation);
    xPercent -= speed / 10;
  };

  useEffect(() => {
    if (direction === "left") {
      requestAnimationFrame(leftAnimation);
    } else {
      requestAnimationFrame(rightAnimation);
    }
  }, [direction]);

  useEffect(() => {
    const handleResize = () => {
      // On resize, reposition the second div based on the first div's width
      gsap.set(second.current, { left: first.current.offsetWidth});
    };

    // Attach the event listener for resize
    window.addEventListener("resize", handleResize);

    // Initial setup
    gsap.set(second.current, { left: first.current.offsetWidth});

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-fit overflow-hidden inline-block bg-[#fa1b1b] text-white box-border leading-none align-bottom">
      <div ref={marquee} className="h-full relative">
        <div className="w-42 h-fit w-fit" ref={first}>
          {children}
        </div>
        <div ref={second} className=" w-42 h-fit w-full absolute top-0">
          {children}
        </div>
      </div>
    </div>
  );
}
