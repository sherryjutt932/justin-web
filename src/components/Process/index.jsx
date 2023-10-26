import React, { useState } from "react";
import Marquee from "./Marquee";
import longArrowRight from "../../assests/icons/longArrowRight.svg";
import data from "./data";
import clsx from "clsx";

export default function Index() {
  const cards = data();
  const [isActive, setisActive] = useState(0);

  return (
    <section className="h-screen w-full relative text-light bg-dark flex flex-col">
      <div className="w-full overflow-hidden py-6 m14:py-10">
        <Marquee speed={1}>
          <div>DISCOVER MORE</div>
          <img className="arrowRef mx-12" src={longArrowRight} alt="" />
          <div>OUR PROCESS</div>
          <img className="arrowRef mx-12" src={longArrowRight} alt="" />
        </Marquee>
      </div>

      <div className="w-full h-full  flex items-center justify-center">
        <div className=" flex w-[80%] justify-center">
          <div className="w-[350px] flex items-center justify-start">
            <img src={cards[isActive].img} alt="" />
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-y-8 gap-x-16 m14:gap-y-16 m14:gap-x-32 content-between">
            {cards.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => setisActive(index)}
                  onMouseEnter={() => setisActive(index)}
                  className="group aspect-[1.75] px-6 py-7 max-h-[250px] h-full col-span-1 row-span-1 relative "
                >
                  <div className="absolute top-5 right-5 w-fit h-fit z-10">
                    <span className={clsx(isActive===index?"border-dark text-dark":"border-light text-light",
                      "pt-[2px] h-6 aspect-square text-[20px] rounded-full border mr-2 flex items-center justify-center text-base leading-none transition-all duration-500 ease"
                    )}>
                      {index + 1}
                    </span>
                  </div>

                  <div className="relative z-10">
                  <h1 className={clsx(isActive===index?"text-dark":"text-light",
                    "capitalize font-Satoshi-Medium text-[18px] 2xl:text-[24px] pb-3 transition-all duration-500 ease"
                  )}>
                    {item.label}
                  </h1>
                  <p className={clsx(isActive===index?"text-dark":"text-gray-97",
                    "font-Satoshi text-[14px] 2xl:text-[18px] 2xl:leading-[28px] tracking-tight w-[90%] transition-all duration-500 ease"
                  )}>
                    {item.detail}
                  </p>
                  </div>

                  <div className={clsx(isActive===index?"h-full":"h-0",
                    "transition-all duration-500 ease absolute bottom-0 left-0 w-full  bg-light"
                  )}>
                   
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
