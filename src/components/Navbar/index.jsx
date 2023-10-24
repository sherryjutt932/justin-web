import React, { useState } from "react";
import Icon from "./Icon";
import hamBurger from "../../assests/icons/hamBurger.svg"

export default function Navbar({ theme }) {
  const [isActive, setisActive] = useState(0);
  const navArray = ["Home", "Portfolio", "About Us","Pricing"];

  const setActive = (index) => {
    setisActive(index);
  };

  return (
    <nav
      className={`${
        theme === "dark" ? "text-white" : "text-black "
      } w-full relative top-0 left-0 overflow-hidden flex items-center h-24 justify-between font-Satoshi whitespace-nowrap`}
    >
      <div className="flex-1"></div>
      <div className="flex-1 gap-4 flex justify-end items-center">{navArray.map((item, index) => {
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
      })}</div>
      <div className="flex-1 gap-4 flex justify-end items-center">
        <span className="block h-[45px] w-[1px] bg-gray-c5"></span>
      <Icon
            theme={theme}
            index={-1}
            isActive={isActive}
            setActive={setActive}
          >
            Login
          </Icon>
          <img src={hamBurger} alt="hamburger" />
      </div>

      <span
        className={`${
          theme === "dark" ? "" : ""
        } border-gray-c5 absolute bottom-0 rounded-full left-1/2 -translate-x-1/2 border-b w-full`}
      ></span>
    </nav>
  );
}
