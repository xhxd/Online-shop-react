import React from "react";
import "./PackingMachineLayout.css";

function PackingMachine({ name, image }) {
  return (
    <div className="product">
      <div className="product__details">
        <div className="product__image">
          <img src={image} alt="" />
        </div>
        <div className="product__info">
          <div className="product__name">
            <p>{name}</p>
          </div>
        </div>
      </div>
      <div className="product__button">
        <div className="button__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bookmark"
            viewBox="0 0 16 16"
          >
            <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z" />
            <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z" />
          </svg>
        </div>
        <div className="button__text">
          <h4>SAVE</h4>
        </div>
      </div>
    </div>
  );
}

export default PackingMachine;
