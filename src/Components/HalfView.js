import React from "react";

const HalfView = ({ primary, secondary }) => {
  return (
    <div>
      <div className="relative inset-0 ">
        <svg
          className="absolute inset-0"
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="90px"
          viewBox="0 0 1600.000000 1600.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,1600.000000) scale(0.100000,-0.100000)"
            fill={primary}
            stroke="none"
          >
            <path
              d="M3500 11875 l0 -1125 500 0 500 0 0 -2250 0 -2250 500 0 500 0 0
-125 0 -125 250 0 250 0 0 -125 0 -125 2000 0 2000 0 0 125 0 125 250 0 250 0
0 125 0 125 500 0 500 0 0 2250 0 2250 500 0 500 0 0 1125 0 1125 -1500 0
-1500 0 0 -125 0 -125 -125 0 -125 0 0 -125 0 -125 -125 0 -125 0 0 -125 0
-125 -125 0 -125 0 0 -125 0 -125 -125 0 -125 0 0 -125 0 -125 -500 0 -500 0
0 125 0 125 -125 0 -125 0 0 125 0 125 -125 0 -125 0 0 125 0 125 -125 0 -125
0 0 125 0 125 -125 0 -125 0 0 125 0 125 -1500 0 -1500 0 0 -1125z m4750
-3125 l0 -2750 -250 0 -250 0 0 2750 0 2750 250 0 250 0 0 -2750z"
            />
          </g>
        </svg>

        <svg
          className="mx-auto absolute z-10"
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="90px"
          viewBox="0 0 1600.000000 1600.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,1600.000000) scale(0.100000,-0.100000)"
            fill={secondary}
            stroke="none"
          >
            <path
              d="M7750 8875 l0 -2875 250 0 250 0 0 2875 0 2875 -250 0 -250 0 0
-2875z"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};
export default HalfView;
