/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ComponentChartLineWrapper = ({
  className,
  componentChartLine = "/img/component-chart-line-curveb-1.svg",
}) => {
  return (
    <img className={`component-chart-line-wrapper ${className}`} alt="Component chart line" src={componentChartLine} />
  );
};

ComponentChartLineWrapper.propTypes = {
  componentChartLine: PropTypes.string,
};
