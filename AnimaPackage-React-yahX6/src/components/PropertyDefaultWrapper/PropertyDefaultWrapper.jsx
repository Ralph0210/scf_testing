/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const PropertyDefaultWrapper = ({ property1 }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`property-default-wrapper ${state.property1}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      {state.property1 === "default" && <div className="lorem-ipsum">lorem Ipsum</div>}

      {state.property1 === "variant-2" && (
        <>
          <div className="lorem-ipsum-2">lorem Ipsum</div>
          <div className="home-icon-property">
            <img className="icon-check" alt="Icon check" src="/img/icon-check.png" />
          </div>
        </>
      )}
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "default") {
    switch (action) {
      case "click":
        return {
          property1: "variant-2",
        };
    }
  }

  if (state.property1 === "variant-2") {
    switch (action) {
      case "click":
        return {
          property1: "default",
        };
    }
  }

  return state;
}

PropertyDefaultWrapper.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
