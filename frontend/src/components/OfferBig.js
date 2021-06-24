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

        {/* <div>20% OFF CHEESEBURGERS</div> */}
      </div>
      <div className="bigOffer">
        <img
          className="img1"
          src="https://images.unsplash.com/photo-1429554513019-6c61c19ffb7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt="Image"
        ></img>

        <img
          className="img2"
          src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt="Image"
        ></img>

        <img
          className="img3"
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt="Image"
        ></img>

        {/* <p> 20%s OFF CHEESEBURGERS</p> */}
      </div>
    </div>
  );
}

export default OfferBig;
