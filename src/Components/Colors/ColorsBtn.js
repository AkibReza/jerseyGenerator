import React from "react";

const ColorsBtn = ({
  setter,
  color,
  primaryColorState,
  secondaryColorState,
}) => {
  return (
    <button
      onClick={() => setter(color)}
      style={{ backgroundColor: color }}
      className={
        (primaryColorState || secondaryColorState) === color
          ? "w-10 h-10 border-2 border-black rounded-md outline-none ring-2 ring-blue-500"
          : "w-10 h-10 border-2 border-black rounded-md"
      }
    ></button>
  );
};

export default ColorsBtn;
