import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Marquee({ children, direction, speed, ...props }) {
  const marquee = useRef();
  const first = useRef();
  const second = useRef();

  let xPercent = 0;

  const animateMarquee = () => {
    xPercent = direction === "left" ? (xPercent - speed / 10) : (xPercent + speed / 10);
    xPercent = (xPercent <= -100) ? 0 : ((xPercent >= 0) ? -100 : xPercent);

    gsap.to([first.current, second.current], {
      xPercent,
      duration: 0,
      ease: "none",
    });

    requestAnimationFrame(animateMarquee);
  };

  const setSecondPosition = () => {
    // Set the initial position of the second div based on the direction
    gsap.set(second.current, { left: direction === "left" ? "100%" : "-100%" });
  };

  useEffect(() => {
    // Set the initial position of the second div
    setSecondPosition();
    
    // Start the animation when the component mounts
    animateMarquee();

    // Cleanup on component unmount
    return () => {
      // Stop the animation when the component is unmounted
      cancelAnimationFrame(animateMarquee);
    };
  }, [direction]);

  useEffect(() => {
    const handleResize = () => {
      // On resize, reposition the second div based on the first div's width
      setSecondPosition();
    };

    // Attach the event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="overflow-hidden inline-block rounded-full text-light box-border leading-none align-bottom bg-sec">
      <div ref={marquee} className="h-fit relative whitespace-nowrap">
        <div  ref={first} className=" w-42 h-fit pl-8 pt-3">
          {children}
        </div>
        <div ref={second} className="  w-42 h-fit absolute top-0 pl-8 pt-3">
          {children}
        </div>
      </div>
    </div>
  );
}
