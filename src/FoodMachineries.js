import React, { useEffect, useState } from "react";
import db from "./firebase";
import FoodEquipments from "./FoodEquipments";
import "./FoodMachineries.css";
import FoodProductionLine from "./FoodProductionLine";

function FoodMachineries() {
  const [line, setLine] = useState([]);
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    db.collection("productionLine").onSnapshot((snapshot) =>
      setLine(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  });

  useEffect(() => {
    db.collection("foodEquipment").onSnapshot((snapshot) =>
      setEquipment(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  });

  return (
    <div className="foodMachineries">
      <div className="production__lines" width="100">
        <div className="productionLines__heading">
          <h2 className="productionLines__headingName">
            Food Production Lines
          </h2>
          <h2 className="productionLines__headingNumber">01</h2>
        </div>
        <div className="all__productions">
          {line.map((machine) => (
            <FoodProductionLine
              key={machine.id}
              lineName={machine.data.name}
              lineImage={machine.data.image}
            />
          ))}
        </div>
      </div>

      <div className="food__equipments" width="100">
        <div className="foodEquipments__heading">
          <h2 className="foodEquipments__headingName">Food Equipments</h2>
          <h2 className="foodEquipments__headingNumber">02</h2>
        </div>
        <div className="all__equipments">
          {equipment.map((machineE) => (
            <FoodEquipments
              key={machineE.id}
              equipmentName={machineE.data.name}
              equipmentImage={machineE.data.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FoodMachineries;
