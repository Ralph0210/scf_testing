/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Frame = ({ property1, className }) => {
  return (
    <div className={`frame ${className}`}>
      <div className="overlap-group">
        <div className="ellipse" />
        <div className="div" />
        <img className="ellipse-stroke" alt="Ellipse stroke" src="/img/ellipse-21-stroke-1.svg" />
        <div className="ellipse-2" />
        <div className="ellipse-3" />
        <div className="ellipse-4" />
        <div className="ellipse-5" />
        <div className="ellipse-6" />
        <div className="ellipse-7" />
        <div className="ellipse-8" />
        <div className="ellipse-9" />
        <div className="ellipse-10" />
        <div className="ellipse-11" />
        <div className="ellipse-12" />
        <div className="ellipse-13" />
        <div className="ellipse-14" />
        <div className="ellipse-15" />
        <div className="ellipse-16" />
        <div className="ellipse-17" />
        <div className="ellipse-18" />
        <div className="ellipse-19" />
        <div className="ellipse-20" />
        <div className="ellipse-21" />
        <div className="ellipse-22" />
        <div className="ellipse-23" />
        <div className="ellipse-24" />
        <div className="ellipse-25" />
        <img className="vector" alt="Vector" src="/img/vector-3-1.svg" />
        <div className="credit-card">Credit card</div>
      </div>
      <div className="div-2">
        <div className="comprehensive">
          Comprehensive <br />
          Financial Survey.
        </div>
        <p className="the-SCF-conducted-by">
          <span className="text-wrapper">The SCF, conducted by the </span>
          <span className="span">Federal Reserve System</span>
          <span className="text-wrapper">, is a nationwide survey that provides a comprehensive view of </span>
          <span className="span">income, wealth, debt</span>
          <span className="text-wrapper">, and various financial factors.</span>
        </p>
      </div>
    </div>
  );
};

Frame.propTypes = {
  property1: PropTypes.oneOf(["default"]),
};
