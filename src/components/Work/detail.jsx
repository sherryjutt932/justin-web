import React from "react";

export default function Detail({ data }) {
  const detailClasses =
    "pl-16 2xl:pl-32 pt-28 m14:pt-12 min-w-[100vw] flex flex-col justify-between m14:justify-center m14:gap-16 2xl:gap-28  w-full h-full";

  return (
    <div className={detailClasses}>
      <h2 className=" text-6xl m14:text-[60px] 2xl:text-[80px]">
        {data.heading}
      </h2>
      <ul className="w-fit font-Satoshi text-base 2xl:text-[22px] list-disc list-inside">
        {data.listItems.map((item, index) => {
          return (
            <li
              key={index}
              className="py-5 pl-4 pr-8 border-b border-t border-gray-c5"
            >
              <span className="relative -left-3">{item}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
