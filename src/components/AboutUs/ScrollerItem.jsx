// ScrollerItem.js
import React from "react";

const ScrollerItem = ({ text, imageSrc, altText }) => (
  <div className="shrink-0">
    {text}
    <div className="inline-block align-middle mx-10">
      <img src={imageSrc} alt={altText} />
    </div>
  </div>
);

export default ScrollerItem;
