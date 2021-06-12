import React from "react";
import "../css/restaurantDetails.css";

function RestaurantFull(props) {
  return (
    <>
      <div className="img-res">
        <img className="brand_logo" src={props.image} alt="image"></img>
      </div>

      <div className="name">
        <h1>{props.name}</h1>
        <h2>
          {props.state} , {props.city}
        </h2>
      </div>
    </>
  );
}

export default RestaurantFull;
