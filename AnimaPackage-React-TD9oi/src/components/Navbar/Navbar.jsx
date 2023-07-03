/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Property1Variant6 } from "../Property1Variant6";
import { Property1Variant7 } from "../Property1Variant7";
import { PropertyAnalysis } from "../PropertyAnalysis";
import { PropertyVariant } from "../PropertyVariant";
import { PropertyVariantWrapper } from "../PropertyVariantWrapper";
import { PropertyWrapper } from "../PropertyWrapper";
import "./style.css";

export const Navbar = ({
  className,
  override = <Property1Variant7 />,
  override1 = <PropertyAnalysis />,
  property1Variant6LanguageSelectionMingcuteDownFill = "/img/mingcute-down-fill-6.svg",
}) => {
  return (
    <div className={`navbar ${className}`}>
      {override}
      {override1}
      <PropertyVariant />
      <PropertyWrapper />
      <PropertyVariantWrapper />
      <Property1Variant6 languageSelectionMingcuteDownFill={property1Variant6LanguageSelectionMingcuteDownFill} />
    </div>
  );
};

Navbar.propTypes = {
  property1Variant6LanguageSelectionMingcuteDownFill: PropTypes.string,
};
