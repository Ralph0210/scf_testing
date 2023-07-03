/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { LanguageSelection } from "../LanguageSelection";
import "./style.css";

export const Property1Variant6 = ({ languageSelectionMingcuteDownFill = "/img/mingcute-down-fill-5.svg" }) => {
  return (
    <div className="property-1-variant6">
      <LanguageSelection className="language-selection-instance" mingcuteDownFill={languageSelectionMingcuteDownFill} />
    </div>
  );
};

Property1Variant6.propTypes = {
  languageSelectionMingcuteDownFill: PropTypes.string,
};
