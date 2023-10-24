import React, { forwardRef } from "react";
import Marquee from "./Marquee";
import greaterThen from "../../assests/icons/greaterThen.svg"
import clsx from "clsx";

const Head = forwardRef(({ theme }, ref) => {
  return (
    <div className=" text-[6rem] 2xl:text-[8rem] h-[calc(100vh-6rem)] leading-none flex items-center py-12">
      {/* main heading */}
      <div>
        Your Trusted Partner <br />
        For Your{" "}
        <span
          ref={ref}
          className={clsx(
            theme === "dark" ? "bg-sec" : "bg-dark",
            "w-[4rem] h-[4rem] aspect-square inline-block rounded-full align-baseline"
          )}
        ></span>
        nline{" "}
        <Marquee direction={"left"} speed={1}>
          Business *
        </Marquee>
        <br />
        Success

        {/* bottom right content*/}
        <div className={clsx("w-full flex 2xl:mt-16")}>
          <div className="w-[50%]"></div>
          <div className="w-[50%] text-base pr-[10%] font-Satoshi ">
            <p
              className={clsx(
                theme === "dark" ? "text-gray-79" : "text-gray-79"
              )}
            >
              Our top priority is to provide exceptional support to our clients
              throughout their entire project journey. Our team is readily
              accessible to address any inquiries.
            </p>
            <a
              className="group mt-4 font-semibold uppercase leading-loose flex items-center"
              href="/"
            >
              <div className="relative">
              Learn More
              <div className={clsx(
                  theme === "dark" ? "bg-light" : "bg-dark",
                  "group-hover:w-0 transition-all duration-500 absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-full "
                )}></div>
              </div>
              <button
                className={clsx(
                  theme === "dark" ? "text-dark" : "",
                  "group-hover:border-[#00000000] transition-all duration-500 h-9 border border-dark border-dashed bg-light ml-6 px-6 py-1 rounded-full"
                )}
              >
                <img src={greaterThen} alt="greaterthen" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Head;
