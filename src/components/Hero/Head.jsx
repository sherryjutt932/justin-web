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
            "w-[4rem] aspect-square inline-block rounded-full align-baseline"
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
              className="mt-4 block font-semibold underline underline-offset-8 uppercase"
              href="/"
            >
              Learn More
              <button
                className={clsx(
                  theme === "dark" ? "text-dark" : "",
                  "h-9 border border-dark border-dashed bg-light ml-6 px-6 py-1 rounded-full"
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
