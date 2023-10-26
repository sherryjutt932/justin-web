import React from "react";

export default function Image({ src }) {
  const imgClasses =
    "pr-16 2xl:pr-32 py-12 h-full flex justify-end items-end pb-10 2xl:pb-32 m14:pb-16";

  return (
    <div className={imgClasses}>
      <img
        src={src}
        alt="workImage"
        className="aspect-[1088/712] w-[85%] m14:w-[815px] 2xl:w-[1088px]"
      />
    </div>
  );
}
