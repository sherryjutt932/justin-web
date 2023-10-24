import React from "react";
import { cn } from "../../lib/utils";
import arrowRight from "../../assests/icons/arrowRight.svg";

export default function Box({
  style,
  theme,
  className,
  children,
  label,
  index,
  detail,
}) {
  return (
    <div
      style={style}
      className={cn(
        className,
        index === "2" && "mt-24 2xl:mt-32",
        index === "3" && "mt-48 2xl:mt-64",
        theme === "dark" ? " bg-light text-dark" : "",
        "group uppercase font-Satoshi text-5xl aspect-[3/2] flex flex-col justify-center items-center relative cursor-pointer"
      )}
    >
      <div className="absolute text-base leading-none p-2 rounded-full border border-dark left-6 top-6 h-8 w-8 aspect-square">
        {index}
      </div>
      <div className="absolute text-base leading-none p-2 right-6 top-6 text-gray-79">
        {detail}
      </div>
      <div className="group-hover:translate-x-1/2 transition-all duration-700 absolute text-base leading-none p-2 left-6 bottom-6">
        <img src={arrowRight} alt="arrowRight" />
      </div>

      <div className="mb-4">{label}</div>
      <div className="relative overflow-hidden">
        <p className="group-hover:-translate-y-full transition-all duration-700">
          {children}
        </p>
        <p className="group-hover:top-0 transition-all duration-700 absolute top-[150%] left-0 h-full w-full">
          {children}
        </p>
      </div>
    </div>
  );
}

// Set default values for props
Box.defaultProps = {
  theme: "dark",
};
