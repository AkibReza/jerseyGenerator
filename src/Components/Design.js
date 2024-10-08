import React, { useState } from "react";

import img1 from "../img/img1.svg";
import PrimaryColor from "./Colors/PrimaryColor";
import SecondaryColor from "./Colors/SecondaryColor";
import DesignList from "./DesignList";
import FinalDesign from "./FinalDesign";

const Design = () => {
  const [primaryColor, setPrimaryColor] = useState("");
  const primaryColorHandler = (color) => {
    setPrimaryColor(color);
    setFinal(false);
  };
  const [secondaryColor, setSecondaryColor] = useState("");
  const secondaryColorHandler = (color) => {
    setSecondaryColor(color);
    setFinal(false);
  };
  const [jersey, setJerseyDesign] = useState("");
  const jerseyClickHandler = (type) => {
    setJerseyDesign(type);
    setFinal(false);
  };

  const [final, setFinal] = useState(false);

  return (
    <div>
      <p className="text-xl my-8 text-center font-bold">Select your design:</p>
      <img className="mx-auto" width="180px" src={img1} alt=""></img>
      <div className="max-w-2xl mx-auto relative">
        <DesignList setJerseyDesign={jerseyClickHandler} jersey={jersey} />
        <PrimaryColor
          setPrimaryColor={primaryColorHandler}
          primaryColor={primaryColor}
        />
        <SecondaryColor
          setSecondaryColor={secondaryColorHandler}
          secondaryColor={secondaryColor}
        />

        <div className="w-full my-8 text-center">
          <button
            onClick={() =>
              primaryColor && secondaryColor && jersey && setFinal(true)
            }
            className="text-xl font-bold bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >
            Generate!
          </button>
        </div>

        {final && (
          <FinalDesign
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            jersey={jersey}
          />
        )}
      </div>
    </div>
  );
};

export default Design;
