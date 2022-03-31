import React from "react";
import FoodMachineries from "./FoodMachineries";
import "./Home.css";
import MachineOptions from "./MachineOptions";
import PackingMachines from "./PackingMachines";
import Slideshow from "./Slideshow";

function Home() {
  return (
    <div className="home">
      <div className="home__body">
        <div className="home__left">
          <MachineOptions />
        </div>
        <div className="home__right">
          <Slideshow />
          <PackingMachines />
          <FoodMachineries />
        </div>
      </div>
    </div>
  );
}

export default Home;
