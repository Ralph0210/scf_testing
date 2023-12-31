/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const ComponentChartWrapper = ({ className, rectangleClassName }) => {
  return (
    <div className={`component-chart-wrapper ${className}`}>
      <div className="component-chart-2">
        <div className={`rectangle-2 ${rectangleClassName}`} />
        <div className="label-2">Label</div>
      </div>
    </div>
  );
};
