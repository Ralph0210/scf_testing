import React from "react";
import { DivWrapper } from "../../components/DivWrapper";
import { Frame } from "../../components/Frame";
import { FrameWrapper } from "../../components/FrameWrapper";
import { Navbar } from "../../components/Navbar";
import { PropertyDefaultWrapper } from "../../components/PropertyDefaultWrapper";
import "./style.css";

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-page-v">
        <div className="overlap">
          <div className="text-wrapper-4">lorem ipsum</div>
          <div className="text-wrapper-5">lorem ipsum</div>
          <div className="text-wrapper-6">lorem ipsum</div>
          <div className="text-wrapper-7">lorem ipsum</div>
          <div className="text-wrapper-8">lorem ipsum</div>
          <div className="text-wrapper-9">lorem ipsum</div>
          <div className="text-wrapper-10">lorem ipsum</div>
          <div className="text-wrapper-11">lorem ipsum</div>
          <div className="rectangle-3" />
          <div className="rectangle-4" />
          <div className="rectangle-5" />
          <div className="rectangle-6" />
          <div className="text-wrapper-12">Copyright 2023</div>
          <div className="rectangle-7" />
        </div>
        <div className="overlap-2">
          <div className="rectangle-8" />
          <div className="rectangle-9" />
          <div className="text-wrapper-13">SCF</div>
          <Navbar
            className="navbar-instance"
            property1Variant6LanguageSelectionMingcuteDownFill="/img/mingcute-down-fill-1.svg"
          />
          <div className="overlap-wrapper">
            <div className="overlap-3">
              <div className="overlap-4">
                <h1 className="h-1">Unlock Financial Insights</h1>
                <p className="p">
                  Discover the Power of the Survey of Consumer Finance (SCF) and Make Informed Financial Decisions.
                  Access a Wealth of Data on Income, Wealth, Debt, and more. Gain Deep Understanding, Identify Trends,
                  and Plan for a Strong Financial Future.
                </p>
                <div className="rectangle-10" />
                <img className="element" alt="Element" src="/img/1-1.png" />
              </div>
              <DivWrapper className="property-1-variant13" mingcuteDownFill="/img/mingcute-down-fill.svg" />
            </div>
          </div>
        </div>
        <div className="text-wrapper-14">What interests you?</div>
        <p className="lorem-ipsum-dolor">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit <br />
          amet sem dignissim, rhoncus dolor eu, maximus justo.
        </p>
        <div className="text-wrapper-15">Assets</div>
        <div className="text-wrapper-16">Debt</div>
        <div className="text-wrapper-17">Demographics</div>
        <div className="overlap-5">
          <div className="text-wrapper-18">Discover with</div>
          <div className="text-wrapper-19">Topics</div>
          <div className="overlap-6">
            <div className="ellipse-26" />
            <div className="text-wrapper-20">5</div>
          </div>
        </div>
        <div className="overlap-7">
          <div className="group">
            <div className="overlap-group-3">
              <div className="text-wrapper-21">five interests chosen</div>
            </div>
          </div>
          <img
            className="ralphcyh-cute-and"
            alt="Ralphcyh cute and"
            src="/img/ralphcyh-3d-cute-and-abstract-icon-for-demographics-e49fd198-da5.png"
          />
        </div>
        <img
          className="ralphcyh-cute"
          alt="Ralphcyh cute"
          src="/img/ralphcyh-3d-cute-icon-for-credit-cards-only-numbers-no-text-lig.png"
        />
        <img
          className="ralphcyh-d-cute-and"
          alt="Ralphcyh cute and"
          src="/img/ralphcyh-3d-cute-and-abstract-icon-for-financial-assets-add-mon.png"
        />
        <p className="text-wrapper-22">What is the SCF ?</p>
        <Frame className="frame-28" property1="default" />
        <FrameWrapper
          className="frame-27"
          componentChartGlobalGridDashLine="/img/dashline-2.svg"
          componentChartGlobalGridDashLine1="/img/dashline-5.svg"
          componentChartGlobalGridDashLine2="/img/dashline-4.svg"
          componentChartGlobalGridImg="/img/dashline-1.svg"
          componentChartLineComponentChartLine="/img/component-chart-line-curvea.svg"
          componentChartLineWrapperComponentChartLine="/img/component-chart-line-curveb.svg"
        />
        <div className="text-wrapper-23">Research And News</div>
        <div className="frame-3">
          <div className="rectangle-11" />
          <div className="rectangle-12" />
          <div className="rectangle-13" />
          <div className="text-wrapper-24">Research 1</div>
          <div className="text-wrapper-25">Research 2</div>
          <div className="text-wrapper-26">Research 3</div>
          <div className="text-wrapper-27">01/01/2023</div>
          <div className="text-wrapper-28">01/01/2023</div>
          <div className="text-wrapper-29">01/01/2023</div>
        </div>
        <div className="frame-4">
          <div className="frame-5">
            <PropertyDefaultWrapper property1="default" />
            <PropertyDefaultWrapper property1="default" />
          </div>
          <div className="frame-6">
            <PropertyDefaultWrapper property1="default" />
            <PropertyDefaultWrapper property1="default" />
            <PropertyDefaultWrapper property1="default" />
          </div>
          <div className="frame-7">
            <PropertyDefaultWrapper property1="default" />
            <PropertyDefaultWrapper property1="default" />
            <PropertyDefaultWrapper property1="default" />
          </div>
        </div>
        <div className="frame-8">
          <div className="frame-5">
            <PropertyDefaultWrapper property1="default" />
            <PropertyDefaultWrapper property1="default" />
          </div>
          <div className="frame-6">
            <PropertyDefaultWrapper property1="default" />
            <PropertyDefaultWrapper property1="default" />
            <PropertyDefaultWrapper property1="default" />
          </div>
          <div className="frame-7">
            <PropertyDefaultWrapper property1="default" />
            <PropertyDefaultWrapper property1="default" />
            <PropertyDefaultWrapper property1="default" />
          </div>
        </div>
        <div className="frame-9">
          <div className="frame-5">
            <PropertyDefaultWrapper property1="default" />
            <PropertyDefaultWrapper property1="default" />
          </div>
          <div className="frame-6">
            <PropertyDefaultWrapper property1="default" />
            <PropertyDefaultWrapper property1="default" />
            <PropertyDefaultWrapper property1="default" />
          </div>
          <div className="frame-7">
            <PropertyDefaultWrapper property1="default" />
            <PropertyDefaultWrapper property1="default" />
            <PropertyDefaultWrapper property1="default" />
          </div>
        </div>
      </div>
    </div>
  );
};
