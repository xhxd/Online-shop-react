import React from "react";
import "./FoodProductionLine.css";

function FoodProductionLine({ lineName, lineImage }) {
  return (
    <div className="production__line">
      <div className="line__name">
        <h3>{lineName}</h3>
      </div>
      <div className="line__image">
        <img src={lineImage} alt="" />
      </div>
    </div>
  );
}

export default FoodProductionLine;
