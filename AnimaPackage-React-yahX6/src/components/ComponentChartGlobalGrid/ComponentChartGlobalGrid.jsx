/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ComponentChartGlobalGrid = ({
  className,
  componentChartClassName,
  axisClassName,
  dashLineClassName,
  dashLine = "/img/dashline-6.svg",
  countClassName,
  axisClassNameOverride,
  dashLineClassNameOverride,
  img = "/img/dashline-6.svg",
  countClassNameOverride,
  divClassName,
  imgClassName,
  dashLine1 = "/img/dashline-6.svg",
  divClassNameOverride,
  axisClassName1,
  imgClassNameOverride,
  dashLine2 = "/img/dashline-6.svg",
  countClassName1,
  axisClassName2,
  dashLineClassName1,
  dashLine3 = "/img/dashline-6.svg",
  countClassName2,
}) => {
  return (
    <div className={`component-chart-global-grid ${className}`}>
      <div className={`component-chart-4 ${componentChartClassName}`}>
        <div className={`axis ${axisClassName}`}>
          <img className={`dash-line ${dashLineClassName}`} alt="Dash line" src={dashLine} />
          <div className={`count ${countClassName}`}>Count</div>
        </div>
        <div className={`axis-2 ${axisClassNameOverride}`}>
          <img className={`dash-line ${dashLineClassNameOverride}`} alt="Dash line" src={img} />
          <div className={`count ${countClassNameOverride}`}>Count</div>
        </div>
        <div className={`axis-3 ${divClassName}`}>
          <img className={`dash-line ${imgClassName}`} alt="Dash line" src={dashLine1} />
          <div className={`count ${divClassNameOverride}`}>Count</div>
        </div>
        <div className={`axis-4 ${axisClassName1}`}>
          <img className={`dash-line ${imgClassNameOverride}`} alt="Dash line" src={dashLine2} />
          <div className={`count ${countClassName1}`}>Count</div>
        </div>
        <div className={`axis-5 ${axisClassName2}`}>
          <img className={`dash-line ${dashLineClassName1}`} alt="Dash line" src={dashLine3} />
          <div className={`count-2 ${countClassName2}`}>Count</div>
        </div>
      </div>
    </div>
  );
};

ComponentChartGlobalGrid.propTypes = {
  dashLine: PropTypes.string,
  img: PropTypes.string,
  dashLine1: PropTypes.string,
  dashLine2: PropTypes.string,
  dashLine3: PropTypes.string,
};
