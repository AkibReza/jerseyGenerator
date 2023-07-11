import React from "react";
import StripeView from "./StripeView";
import DiagonalView from "./DiagonalView";
import HorizonView from "./HorizonView";
import HalfView from "./HalfView";

const FinalDesign = ({ primaryColor, secondaryColor, jersey }) => {
  return (
    <div>
      <p className="text-xl my-8 text-center font-bold">Final Design: </p>
      {jersey === "Stripe" && (
        <StripeView primary={primaryColor} secondary={secondaryColor} />
      )}
      {jersey === "Diagonal" && (
        <DiagonalView primary={primaryColor} secondary={secondaryColor} />
      )}
      {jersey === "Horizon" && (
        <HorizonView primary={primaryColor} secondary={secondaryColor} />
      )}
      {jersey === "Half" && (
        <HalfView primary={primaryColor} secondary={secondaryColor} />
      )}
    </div>
  );
};

export default FinalDesign;
