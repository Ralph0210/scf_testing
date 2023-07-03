/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const ComponentChart = ({ className, rectangleClassName }) => {
  return (
    <div className={`component-chart ${className}`}>
      <div className="div-3">
        <div className={`rectangle ${rectangleClassName}`} />
        <div className="label">Label</div>
      </div>
    </div>
  );
};
