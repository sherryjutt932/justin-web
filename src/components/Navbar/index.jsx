import React, { useState } from "react";
import Icon from "./Icon";

export default function Navbar({ theme }) {
  const [isActive, setisActive] = useState(0);
  const navArray = ["Home", "Portfolio", "Service"];

  const setActive = (index) => {
    setisActive(index);
  };

  return (
    <nav
      className={`${
        theme === "dark" ? "text-white" : "text-black "
      } px-16 w-full relative top-0 left-0 overflow-hidden flex justify-end items-center h-24 gap-6`}
    >
      {navArray.map((item, index) => {
        return (
          <Icon
            theme={theme}
            key={index}
            index={index}
            isActive={isActive}
            setActive={setActive}
          >
            {item}
          </Icon>
        );
      })}

      <span
        className={`${
          theme === "dark" ? "border-[#ffffff40]" : "border-[#44444430]"
        } absolute bottom-0 rounded-full left-1/2 -translate-x-1/2 border w-full`}
      ></span>
    </nav>
  );
}
