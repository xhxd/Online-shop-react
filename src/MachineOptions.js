import React, { useState } from "react";
import "./MachineOptions.css";

function MachineOptions() {
  const [rowHighlight, setRowHighlight] = useState("All Machines");

  return (
    <div className="machineOptions">
      <div
        className={rowHighlight === "All Machines" ? "active__row" : "deactive"}
        onClick={() => {
          setRowHighlight("All Machines");
        }}
      >
        <h4>All Machines</h4>
      </div>
      <div
        className={
          rowHighlight === "Food Machines" ? "active__row" : "deactive"
        }
        onClick={() => {
          setRowHighlight("Food Machines");
        }}
      >
        <h4>Food Machines</h4>
      </div>
      <div
        className={
          rowHighlight === "Pharmacheutical Machines"
            ? "active__row"
            : "deactive"
        }
        onClick={() => {
          setRowHighlight("Pharmacheutical Machines");
        }}
      >
        <h4>Pharmacheutical Machines</h4>
      </div>
      <div
        className={
          rowHighlight === "Cosmetic Machines" ? "active__row" : "deactive"
        }
        onClick={() => {
          setRowHighlight("Cosmetic Machines");
        }}
      >
        <h4>Cosmetic Machines</h4>
      </div>
    </div>
  );
}

export default MachineOptions;
