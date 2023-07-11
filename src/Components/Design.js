import React, { useState } from "react";

import StripeView from "./StripeView";
import DiagonalView from "./DiagonalView";
import img1 from "../img/img1.svg";
import PrimaryColor from "./PrimaryColor";
import SecondaryColor from "./SecondaryColor";
import DesignList from "./DesignList";
import HorizonView from "./HorizonView";
import HalfView from "./HalfView";

const Design = () => {
  const [primaryColor, setPrimaryColor] = useState("#000000");
  const primaryColorHandler = (color) => {
    setPrimaryColor(color);
  };
  const [secondaryColor, setSecondaryColor] = useState("#303030");
  const secondaryColorHandler = (color) => {
    setSecondaryColor(color);
  };

  const [jersey, setJerseyDesign] = useState("stripe");

  const jerseyClickHandler = (type) => {
    setJerseyDesign(type);
  };

  return (
    <div>
      <p className="text-xl my-8 text-center font-bold">Select your design:</p>
      <img className="mx-auto" width="90px" src={img1} alt=""></img>
      <div className="max-w-2xl mx-auto relative">
        <DesignList setJerseyDesign={jerseyClickHandler} />
        <PrimaryColor setPrimaryColor={primaryColorHandler} />
        <SecondaryColor setSecondaryColor={secondaryColorHandler} />

        <p className="text-xl my-8 text-center font-bold">Final Design: </p>
        <div className="relative">
          {jersey === "stripe" && (
            <StripeView primary={primaryColor} secondary={secondaryColor} />
          )}
          {jersey === "diagonal" && (
            <DiagonalView primary={primaryColor} secondary={secondaryColor} />
          )}
          {jersey === "horizon" && (
            <HorizonView primary={primaryColor} secondary={secondaryColor} />
          )}
          {jersey === "half" && (
            <HalfView primary={primaryColor} secondary={secondaryColor} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Design;
