import React from "react";
import ColorsBtn from "./ColorsBtn";

const SecondaryColor = ({ secondaryColor, setSecondaryColor }) => {
  return (
    <div>
      <p className="text-xl my-8 text-center font-bold">
        Choose Secondary Color:
      </p>
      <ul className="grid grid-cols-2 md:grid-cols-6 gap-y-4 text-center">
        <li>
          <ColorsBtn
            setter={setSecondaryColor}
            color={"#FF0000"}
            secondaryColorState={secondaryColor}
          />
        </li>
        <li>
          <ColorsBtn
            setter={setSecondaryColor}
            color={"#00FF00"}
            secondaryColorState={secondaryColor}
          />
        </li>
        <li>
          <ColorsBtn
            setter={setSecondaryColor}
            color={"#0000FF"}
            secondaryColorState={secondaryColor}
          />
        </li>
        <li>
          <ColorsBtn
            setter={setSecondaryColor}
            color={"#990000"}
            secondaryColorState={secondaryColor}
          />
        </li>
        <li>
          <ColorsBtn
            setter={setSecondaryColor}
            color={"#009900"}
            secondaryColorState={secondaryColor}
          />
        </li>
        <li>
          <ColorsBtn
            setter={setSecondaryColor}
            color={"#000099"}
            secondaryColorState={secondaryColor}
          />
        </li>
        <li>
          <ColorsBtn
            setter={setSecondaryColor}
            color={"#CCCCCC"}
            secondaryColorState={secondaryColor}
          />
        </li>
        <li>
          <ColorsBtn
            setter={setSecondaryColor}
            color={"#111111"}
            secondaryColorState={secondaryColor}
          />
        </li>
        <li>
          <ColorsBtn
            setter={setSecondaryColor}
            color={"#FFC0CB"}
            secondaryColorState={secondaryColor}
          />
        </li>
        <li>
          <ColorsBtn
            setter={setSecondaryColor}
            color={"#800080"}
            secondaryColorState={secondaryColor}
          />
        </li>
        <li>
          <ColorsBtn
            setter={setSecondaryColor}
            color={"#87CEEB"}
            secondaryColorState={secondaryColor}
          />
        </li>
        <li>
          <ColorsBtn
            setter={setSecondaryColor}
            color={"#FFFF00"}
            secondaryColorState={secondaryColor}
          />
        </li>
      </ul>
    </div>
  );
};

export default SecondaryColor;
