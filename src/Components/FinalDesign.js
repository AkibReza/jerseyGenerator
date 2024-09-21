import React from "react";
import StripeView from "./JerseyTypes/StripeView";
import DiagonalView from "./JerseyTypes/DiagonalView";
import HorizonView from "./JerseyTypes/HorizonView";
import HalfView from "./JerseyTypes/HalfView";

const FinalDesign = ({ primaryColor, secondaryColor, jersey }) => {
  return (
    <div>
      <p className="text-xl my-8 text-center font-bold">Final Design: </p>

      {jersey === "Stripe" && (
        <StripeView
          primary={primaryColor}
          secondary={secondaryColor}
          size={"180px"}
        />
      )}
      {jersey === "Diagonal" && (
        <DiagonalView
          primary={primaryColor}
          secondary={secondaryColor}
          size={"180px"}
        />
      )}
      {jersey === "Horizon" && (
        <HorizonView
          primary={primaryColor}
          secondary={secondaryColor}
          size={"180px"}
        />
      )}
      {jersey === "Half" && (
        <HalfView
          primary={primaryColor}
          secondary={secondaryColor}
          size={"180px"}
        />
      )}
    </div>
  );
};

export default FinalDesign;
