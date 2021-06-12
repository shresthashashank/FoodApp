import React from "react";
import "../css/OfferBig.css";

function OfferBig() {
  return (
    <div className="OfferText">
      <h1>TOP OFFERS TODAY</h1>
      <div className="bigOffer">
        <img
          src="https://foodhub211.netlify.app/images/css/offer-1.jpg"
          alt="Image"
        ></img>

        <div>20% OFF CHEESEBURGERS</div>
      </div>
    </div>
  );
}

export default OfferBig;
