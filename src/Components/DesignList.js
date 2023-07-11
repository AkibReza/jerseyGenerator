import React from "react";
import stripeView from "../img/stripeview.svg";
import diagonalView from "../img/diagonalview.svg";
import horizonView from "../img/horizonView.svg";
import halfView from "../img/halfView.svg";

const DesignList = ({ setJerseyDesign }) => {
  return (
    <div>
      <ul className="flex justify-between">
        <li>
          <div>Vertical Stripes</div>
          <button onClick={() => setJerseyDesign("stripe")}>
            <img
              className="mx-auto "
              width="90px"
              src={stripeView}
              alt=""
            ></img>
          </button>
        </li>
        <li>
          <div>Diagonal Stripe</div>
          <button onClick={() => setJerseyDesign("diagonal")}>
            <img
              className="mx-auto"
              width="90px"
              src={diagonalView}
              alt=""
            ></img>
          </button>
        </li>
        <li>
          <div>Horizontal Stripe</div>
          <button onClick={() => setJerseyDesign("horizon")}>
            <img
              className="mx-auto"
              width="90px"
              src={horizonView}
              alt=""
            ></img>
          </button>
        </li>
        <li>
          <div>Half</div>
          <button onClick={() => setJerseyDesign("half")}>
            <img className="mx-auto" width="90px" src={halfView} alt=""></img>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DesignList;
