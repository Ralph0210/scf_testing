/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const DivWrapper = ({
  className,
  componentChartClassName,
  unitClassName,
  unitClassNameOverride,
  divClassName,
  divClassNameOverride,
  unitClassName1,
  unitClassName2,
}) => {
  return (
    <div className={`div-wrapper ${className}`}>
      <div className={`component-chart-2 ${componentChartClassName}`}>
        <div className={`unit ${unitClassName}`}>Unit</div>
        <div className={`text-wrapper ${unitClassNameOverride}`}>Unit</div>
        <div className={`unit-2 ${divClassName}`}>Unit</div>
        <div className={`unit-3 ${divClassNameOverride}`}>Unit</div>
        <div className={`unit-4 ${unitClassName1}`}>Unit</div>
        <div className={`unit-5 ${unitClassName2}`}>Unit</div>
        <div className="unit-6">Unit</div>
      </div>
    </div>
  );
};
