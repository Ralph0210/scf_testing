/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const DivWrapper = ({ className, mingcuteDownFill = "/img/mingcute-down-fill-5.svg" }) => {
  return (
    <div className={`div-wrapper ${className}`}>
      <div className="learn-more">Learn More</div>
      <img className="img" alt="Mingcute down fill" src={mingcuteDownFill} />
    </div>
  );
};

DivWrapper.propTypes = {
  mingcuteDownFill: PropTypes.string,
};
