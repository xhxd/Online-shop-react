import React, { useEffect, useState } from "react";
import "./PackingMachines.css";
import db from "./firebase";
import PackingMachine from "./PackingMachineLayout";

function PackingMachines() {
  const [packingMachine, setPackingMachine] = useState([]);

  useEffect(() => {
    db.collection("products").onSnapshot((snapshot) =>
      setPackingMachine(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  console.log(packingMachine);
  return (
    <div className="packingMachines">
      {packingMachine.map((machine) => (
        <PackingMachine
          key={machine.id}
          name={machine.data.name}
          image={machine.data.image}
        />
      ))}
    </div>
  );
}

export default PackingMachines;
