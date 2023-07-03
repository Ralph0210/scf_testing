/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const HomeIconProperty = ({
  learnMore = "Learn More",
  showIconLens = true,
  exploreData = "Explore Data",
  home = "Home",
  analysis = "Analysis",
  showLanguageSelection = true,
  text = "About",
  about = "About",
  lorem = "lorem Ipsum",
  iconCheck = "/img/icon-check.png",
}) => {
  return (
    <div className="home-icon-property">
      <img className="icon-check" alt="Icon check" src={iconCheck} />
    </div>
  );
};

HomeIconProperty.propTypes = {
  learnMore: PropTypes.string,
  showIconLens: PropTypes.bool,
  exploreData: PropTypes.string,
  home: PropTypes.string,
  analysis: PropTypes.string,
  showLanguageSelection: PropTypes.bool,
  text: PropTypes.string,
  about: PropTypes.string,
  lorem: PropTypes.string,
  iconCheck: PropTypes.string,
};
