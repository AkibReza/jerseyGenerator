import React from "react";
import stripeView from "../img/stripeview.svg";
import diagonalView from "../img/diagonalview.svg";
import horizonView from "../img/horizonView.svg";
import halfView from "../img/halfView.svg";

const DesignList = ({ setJerseyDesign, jersey }) => {
  return (
    <div>
      <ul className="flex justify-between">
        <li>
          <div
            className={
              jersey === "Stripe" ? "font-bold text-center" : "text-center"
            }
          >
            Vertical Stripes
          </div>
          <button onClick={() => setJerseyDesign("Stripe")}>
            <img
              className="mx-auto "
              width="180px"
              src={stripeView}
              alt=""
            ></img>
          </button>
        </li>
        <li>
          <div
            className={
              jersey === "Diagonal" ? "font-bold text-center" : "text-center"
            }
          >
            Diagonal Stripe
          </div>
          <button onClick={() => setJerseyDesign("Diagonal")}>
            <img
              className="mx-auto"
              width="180px"
              src={diagonalView}
              alt=""
            ></img>
          </button>
        </li>
        <li>
          <div
            className={
              jersey === "Horizon" ? "font-bold text-center" : "text-center"
            }
          >
            Horizontal Stripe
          </div>
          <button onClick={() => setJerseyDesign("Horizon")}>
            <img
              className="mx-auto"
              width="180px"
              src={horizonView}
              alt=""
            ></img>
          </button>
        </li>
        <li>
          <div
            className={
              jersey === "Half" ? "font-bold text-center" : "text-center"
            }
          >
            Half
          </div>
          <button onClick={() => setJerseyDesign("Half")}>
            <img className="mx-auto" width="180px" src={halfView} alt=""></img>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DesignList;
