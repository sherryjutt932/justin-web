import clsx from "clsx";
import React from "react";
import { cn } from "../../lib/utils";

export default function Label({ style, children, theme, className }) {
  return (
    <div
      style={style}
      className={cn(
        className,
        theme === "dark"
          ? "border-light bg-dark text-light"
          : "border-dark bg-light text-dark",
        "px-5 py-1 rounded-full border-2 w-fit uppercase font-Satoshi-Medium absolute"
      )}
    >
      {children}
    </div>
  );
}
