import React from "react";
import { ComponentChart } from "../../components/ComponentChart";
import { ComponentChartGlobalGrid } from "../../components/ComponentChartGlobalGrid";
import { ComponentChartLine } from "../../components/ComponentChartLine";
import { ComponentChartWrapper } from "../../components/ComponentChartWrapper";
import { ControlsRadio } from "../../components/ControlsRadio";
import { ControlsRadioWrapper } from "../../components/ControlsRadioWrapper";
import { ControlsSlider } from "../../components/ControlsSlider";
import { DivWrapper } from "../../components/DivWrapper";
import { HomeIconProperty } from "../../components/HomeIconProperty";
import { IconCross } from "../../components/IconCross";
import { IconEqualizer } from "../../components/IconEqualizer";
import { IconUpload } from "../../components/IconUpload";
import { Navbar } from "../../components/Navbar";
import { Property } from "../../components/Property";
import { PropertyDefault } from "../../components/PropertyDefault";
import "./style.css";

export const DataAnalyticsPage = () => {
  return (
    <div className="data-analytics-page">
      <div className="div-2">
        <div className="overlap-2">
          <div className="text-wrapper-2">Year range</div>
          <div className="text-wrapper-3">Unit</div>
          <ControlsSlider className="controls-slider-normal" />
          <div className="text-wrapper-4">1989</div>
          <div className="text-wrapper-5">2013</div>
          <ControlsRadio className="controls-radio-checked" />
          <div className="overlap-3">
            <div className="text-wrapper-6">Mean</div>
            <ControlsRadioWrapper className="controls-radio-normal" />
          </div>
          <div className="text-wrapper-7">Median</div>
          <IconUpload className="icon-upload-instance" />
          <img className="mingcute-down-fill-2" alt="Mingcute down fill" src="/img/mingcute-down-fill-1.svg" />
          <div className="text-wrapper-8">Export</div>
        </div>
        <div className="overlap-4">
          <div className="overlap-5">
            <div className="rectangle-2" />
            <div className="ellipse" />
            <div className="ellipse-2" />
            <img className="ellipse-stroke" alt="Ellipse stroke" src="/img/ellipse-21-stroke.svg" />
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
            <img className="ellipse-19" alt="Ellipse" src="/img/ellipse-26.png" />
            <div className="ellipse-20" />
            <div className="ellipse-21" />
            <div className="ellipse-22" />
            <img className="vector" alt="Vector" src="/img/vector-3.svg" />
            <div className="text-wrapper-9">Credit card</div>
            <div className="rectangle-3" />
            <IconEqualizer className="icon-equalizer-instance" />
          </div>
          <div className="ellipse-23" />
        </div>
        <Navbar
          className="navbar-instance"
          override={<PropertyDefault />}
          override1={<Property />}
          property1Variant6LanguageSelectionMingcuteDownFill="/img/mingcute-down-fill-3.svg"
        />
        <div className="overlap-6">
          <div className="overlap-7">
            <div className="text-wrapper-10">lorem ipsum</div>
            <div className="text-wrapper-11">lorem ipsum</div>
            <div className="text-wrapper-12">lorem ipsum</div>
            <div className="text-wrapper-13">lorem ipsum</div>
          </div>
          <div className="overlap-8">
            <div className="text-wrapper-10">lorem ipsum</div>
            <div className="text-wrapper-11">lorem ipsum</div>
            <div className="text-wrapper-12">lorem ipsum</div>
            <div className="text-wrapper-13">lorem ipsum</div>
          </div>
          <div className="rectangle-4" />
          <div className="rectangle-5" />
          <div className="rectangle-6" />
          <div className="rectangle-7" />
          <div className="text-wrapper-14">Copyright 2023</div>
          <div className="rectangle-8" />
        </div>
        <div className="text-wrapper-15">Display</div>
        <div className="ellipse-24" />
        <div className="ellipse-25" />
        <div className="ellipse-26" />
        <div className="text-wrapper-16">Data</div>
        <div className="overlap-9">
          <div className="rectangle-9" />
          <img className="ic-baseline-plus" alt="Ic baseline plus" src="/img/ic-baseline-plus-2.svg" />
        </div>
        <div className="overlap-10">
          <img className="ic-baseline-plus-2" alt="Ic baseline plus" src="/img/ic-baseline-plus-1.svg" />
          <div className="rectangle-10" />
          <img className="ic-baseline-plus-2" alt="Ic baseline plus" src="/img/ic-baseline-plus.svg" />
        </div>
        <div className="overlap-11">
          <img className="majesticons-undo" alt="Majesticons undo" src="/img/majesticons-undo-line.svg" />
          <img className="majesticons-redo" alt="Majesticons redo" src="/img/majesticons-redo-line.svg" />
        </div>
        <div className="text-wrapper-17">Distributed by</div>
        <img className="vector-2" alt="Vector" src="/img/vector-4.svg" />
        <img className="vector-3" alt="Vector" src="/img/vector-5.svg" />
        <div className="dimensions">
          <ComponentChart
            className="component-chart-global-dimension-primary"
            componentChartClassName="component-chart-instance"
            rectangleClassName="component-chart-global-dimension-primary-instance"
            text="35 - 44"
          />
        </div>
        <ComponentChartWrapper
          className="component-chart-global-separator-horizontal"
          sepratorClassName="component-chart-global-separator-horizontal-instance"
        />
        <DivWrapper
          className="component-chart-global-units"
          componentChartClassName="component-chart-global-units-instance"
          divClassName="component-chart-5"
          divClassNameOverride="component-chart-6"
          unitClassName="design-component-instance-node"
          unitClassName1="component-chart-7"
          unitClassName2="component-chart-8"
          unitClassNameOverride="component-chart-4"
        />
        <div className="overlap-12">
          <ComponentChartGlobalGrid
            axisClassName="component-chart-9"
            axisClassName1="component-chart-9"
            axisClassName2="component-chart-9"
            axisClassNameOverride="component-chart-9"
            className="component-chart-global-grid-instance"
            countClassName="component-chart-11"
            countClassName1="component-chart-11"
            countClassName2="component-chart-11"
            countClassNameOverride="component-chart-11"
            dashLine="/img/dashline.svg"
            dashLine1="/img/dashline.svg"
            dashLine2="/img/dashline.svg"
            dashLine3="/img/dashline.svg"
            dashLineClassName="component-chart-10"
            dashLineClassName1="component-chart-10"
            dashLineClassNameOverride="component-chart-10"
            divClassName="component-chart-9"
            divClassNameOverride="component-chart-11"
            img="/img/dashline.svg"
            imgClassName="component-chart-10"
            imgClassNameOverride="component-chart-10"
          />
          <ComponentChartLine
            className="component-chart-line-curveb"
            componentChartLine="/img/component-chart-line-curveb-1.svg"
          />
        </div>
        <div className="frame">
          <HomeIconProperty iconCheck="/img/icon-check-1.png" />
          <div className="text-wrapper-18">Debt</div>
        </div>
        <div className="frame-2">
          <div className="text-wrapper-19">35 - 44</div>
          <img className="mingcute-down-fill-3" alt="Mingcute down fill" src="/img/mingcute-down-fill-2.svg" />
        </div>
        <h1 className="component-chart-bar">Title</h1>
        <div className="icon-cross-wrapper">
          <IconCross className="icon-cross-instance" />
        </div>
        <div className="frame-3">
          <div className="text-wrapper-19">Age</div>
          <img className="mingcute-down-fill-3" alt="Mingcute down fill" src="/img/mingcute-down-fill.svg" />
        </div>
      </div>
    </div>
  );
};
