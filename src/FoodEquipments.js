import React from "react";
import "./FoodEquipments.css";

function FoodEquipments({ equipmentName, equipmentImage }) {
  return (
    <div class="food__equipment">
      <div class="equipment__image">
        <img src={equipmentImage} alt="" />
      </div>
      <div class="equipment__name">
        <p>{equipmentName}</p>
      </div>
    </div>
  );
}

export default FoodEquipments;
