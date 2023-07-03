/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ComponentChart } from "../ComponentChart";
import { ComponentChartGlobalGrid } from "../ComponentChartGlobalGrid";
import { ComponentChartGlobalSeparatorHorizontal } from "../ComponentChartGlobalSeparatorHorizontal";
import { ComponentChartGlobalUnits } from "../ComponentChartGlobalUnits";
import { ComponentChartLine } from "../ComponentChartLine";
import { ComponentChartLineWrapper } from "../ComponentChartLineWrapper";
import { ComponentChartWrapper } from "../ComponentChartWrapper";
import "./style.css";

export const FrameWrapper = ({
  className,
  componentChartGlobalGridDashLine = "/img/dashline-12.svg",
  componentChartGlobalGridImg = "/img/dashline-11.svg",
  componentChartGlobalGridDashLine1 = "/img/dashline.svg",
  componentChartGlobalGridDashLine2 = "/img/dashline-14.svg",
  componentChartLineComponentChartLine = "/img/component-chart-line-curvea-2.svg",
  componentChartLineWrapperComponentChartLine = "/img/component-chart-line-curveb-2.svg",
}) => {
  return (
    <div className={`frame-wrapper ${className}`}>
      <div className="dimensions">
        <ComponentChart
          className="component-chart-global-dimension-primary"
          rectangleClassName="component-chart-instance"
        />
        <ComponentChartWrapper
          className="component-chart-global-dimension-secondary"
          rectangleClassName="component-chart-global-dimension-secondary-instance"
        />
      </div>
      <ComponentChartGlobalSeparatorHorizontal
        className="component-chart-global-separator-horizontal-instance"
        sepratorClassName="design-component-instance-node"
      />
      <ComponentChartGlobalUnits
        className="component-chart-global-units-instance"
        componentChartClassName="component-chart-5"
        divClassName="component-chart-8"
        divClassNameOverride="component-chart-9"
        unitClassName="component-chart-6"
        unitClassName1="component-chart-10"
        unitClassName2="component-chart-11"
        unitClassNameOverride="component-chart-7"
      />
      <div className="overlap-group-2">
        <ComponentChartGlobalGrid
          axisClassName="component-chart-13"
          axisClassName1="component-chart-18"
          axisClassName2="component-chart-19"
          axisClassNameOverride="component-chart-16"
          className="component-chart-global-grid-instance"
          componentChartClassName="component-chart-12"
          countClassName="component-chart-15"
          countClassName1="component-chart-15"
          countClassName2="component-chart-15"
          countClassNameOverride="component-chart-15"
          dashLine={componentChartGlobalGridDashLine1}
          dashLine1="/img/dashline-13.svg"
          dashLine2={componentChartGlobalGridDashLine}
          dashLine3={componentChartGlobalGridImg}
          dashLineClassName="component-chart-14"
          dashLineClassName1="component-chart-14"
          dashLineClassNameOverride="component-chart-14"
          divClassName="component-chart-17"
          divClassNameOverride="component-chart-15"
          img={componentChartGlobalGridDashLine2}
          imgClassName="component-chart-14"
          imgClassNameOverride="component-chart-14"
        />
        <ComponentChartLine
          className="component-chart-line-curvea"
          componentChartLine={componentChartLineComponentChartLine}
        />
        <ComponentChartLineWrapper
          className="component-chart-line-curveb"
          componentChartLine={componentChartLineWrapperComponentChartLine}
        />
      </div>
      <div className="frame-2">
        <div className="understanding">
          Understanding <br />
          Consumer <br />
          Behavior.
        </div>
        <p className="the-SCF-offers">
          <span className="text-wrapper-2">The SCF offers valuable </span>
          <span className="text-wrapper-3">insights</span>
          <span className="text-wrapper-2"> into how individuals and households manage their financial lives.</span>
        </p>
      </div>
    </div>
  );
};

FrameWrapper.propTypes = {
  componentChartGlobalGridDashLine: PropTypes.string,
  componentChartGlobalGridImg: PropTypes.string,
  componentChartGlobalGridDashLine1: PropTypes.string,
  componentChartGlobalGridDashLine2: PropTypes.string,
  componentChartLineComponentChartLine: PropTypes.string,
  componentChartLineWrapperComponentChartLine: PropTypes.string,
};
