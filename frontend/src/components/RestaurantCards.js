import React from "react";
import "../css/card.css";
import { BrowserRouter as Router, useHistory } from "react-router-dom";

function RestaurantCards(props) {
  const history = useHistory();

  function handleClick() {
    // var restaurantID = props.id;
    history.push(`/main/restaurants/details/${props.id}`);
    console.log("ID" + props.id);
  }
  return (
    <div onClick={handleClick}>
      <div className="card">
        <div className="logo">
          <img className="brand_logo" src={props.image} alt="image"></img>
        </div>
        <div className="restaurant_name">
          {props.name}

          <div className="state">{props.state}</div>
          <div className="city">{props.city} </div>
          <br />
        </div>
      </div>
      <br />
    </div>
  );
}

export default RestaurantCards;
