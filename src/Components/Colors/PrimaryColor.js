import React from "react";
import ColorsBtn from "./ColorsBtn";

const PrimaryColor = ({ primaryColor, setPrimaryColor }) => {
  return (
    <div>
      <p className="text-xl my-8 text-center font-bold">
        Choose Primary Color:
      </p>
      <ul className="grid grid-cols-2 md:grid-cols-6 gap-y-4 text-center">
        <li>
          <ColorsBtn
            setter={setPrimaryColor}
            color={"#FF0000"}
            primaryColorState={primaryColor}
          />
        </li>
        <li>
          <ColorsBtn
            setter={setPrimaryColor}
            color={"#00FF00"}
            primaryColorState={primaryColor}
          />
        </li>
        <li>
          <ColorsBtn
            setter={setPrimaryColor}
            color={"#0000FF"}
            primaryColorState={primaryColor}
          />
        </li>
        <li>
          <ColorsBtn
            setter={setPrimaryColor}
            color={"#990000"}
            primaryColorState={primaryColor}
          />
        </li>
        <li>
          <ColorsBtn
            setter={setPrimaryColor}
            color={"#009900"}
            primaryColorState={primaryColor}
          />
        </li>
        <li>
          <ColorsBtn
            setter={setPrimaryColor}
            color={"#000099"}
            primaryColorState={primaryColor}
          />
        </li>
        <li>
          <ColorsBtn
            setter={setPrimaryColor}
            color={"#CCCCCC"}
            primaryColorState={primaryColor}
          />
        </li>
        <li>
          <ColorsBtn
            setter={setPrimaryColor}
            color={"#111111"}
            primaryColorState={primaryColor}
          />
        </li>
        <li>
          <ColorsBtn
            setter={setPrimaryColor}
            color={"#FFC0CB"}
            primaryColorState={primaryColor}
          />
        </li>
        <li>
          <ColorsBtn
            setter={setPrimaryColor}
            color={"#800080"}
            primaryColorState={primaryColor}
          />
        </li>
        <li>
          <ColorsBtn
            setter={setPrimaryColor}
            color={"#87CEEB"}
            primaryColorState={primaryColor}
          />
        </li>
        <li>
          <ColorsBtn
            setter={setPrimaryColor}
            color={"#FFFF00"}
            primaryColorState={primaryColor}
          />
        </li>
      </ul>
    </div>
  );
};

export default PrimaryColor;
