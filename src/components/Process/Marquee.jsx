import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";

const Marquee = ({ children, speed }) => {
  const marquee = useRef();
  const first = useRef();
  const second = useRef();
  const third = useRef();

  const [scrollDir, setScrollDir] = useState("down");
  const [xPercent, setXPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollDir(scrollY > 0 && scrollY > window.lastScrollY ? "down" : "up");
      window.lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const animateMarquee = () => {
    setXPercent((prev) => {
      let nextXPercent =
        scrollDir === "down" ? prev - speed / 10 : prev + speed / 10;

      // Adjust xPercent to keep it in the range of [-100, 0]
      nextXPercent = nextXPercent <= -100 ? 0 : nextXPercent >= 0 ? -100 : nextXPercent;

      return nextXPercent;
    });

    gsap.to(".arrowRef", {
      rotate: scrollDir === "down"?180:0,
      duration:.7,
    });

  };

  const setSecondPosition = () => {
    gsap.set(second.current, { left: "100%" });
    gsap.set(third.current, { left: "200%" });
  };

  useLayoutEffect(() => {
    const animationInterval = setInterval(() => {
      animateMarquee();
    }, 10);

    return () => {
      clearInterval(animationInterval);
    };
  }, [scrollDir]);

  useEffect(() => {
    gsap.to([first.current, second.current, third.current], {
      xPercent,
      duration: 0,
      ease: "none",
    });
  }, [xPercent]);

  useLayoutEffect(() => {
    const handleResize = () => {
      setSecondPosition();
    };

    setSecondPosition();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-fit text-light box-border leading-none align-bottom text-4xl m14:text-[54px] flex flex-nowrap font-Nohemi">
      <div ref={marquee} className="flex-1 shrink-0 min-w-fit h-fit relative whitespace-nowrap">
        <div ref={first} className="w-fit flex flex-nowrap h-fit pt-3">
          {children}
        </div>
        <div ref={second} className="w-full flex flex-nowrap h-fit absolute top-0 pt-3">
          {children}
        </div>
        <div ref={third} className="w-full flex flex-nowrap h-fit absolute top-0 pt-3">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
