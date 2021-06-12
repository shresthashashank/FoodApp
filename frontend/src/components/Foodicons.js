import React from "react";
import "../css/Foodicons.css";

function Foodicons() {
  return (
    <div className="foodIcons">
      <div className="burger">
        <img
          className="food-icons"
          src="https://foodhub211.netlify.app/images/css/Burger.jpg"
        />{" "}
        <p>Burgers</p>
      </div>
      <div>
        {" "}
        <img
          className="food-icons"
          src="https://foodhub211.netlify.app/images/css/Pizza.jpg"
        />
        <p>Pizza</p>
      </div>
      <div>
        {" "}
        <img
          className="food-icons"
          src="https://foodhub211.netlify.app/images/css/Burger.jpg"
        />
        <p>Pasta</p>
      </div>
      <div>
        {" "}
        <img
          className="food-icons"
          src="https://foodhub211.netlify.app/images/css/Coffee.jpg"
        />
        <p>Coffee</p>
      </div>
      <div>
        {" "}
        <img
          className="food-icons"
          src="https://foodhub211.netlify.app/images/css/Burger.jpg"
        />
        <p>Pocket Friendly</p>
      </div>
      <div>
        {" "}
        <img
          className="food-icons"
          src="https://foodhub211.netlify.app/images/css/Burger.jpg"
        />
        <p>Delivery</p>
      </div>
    </div>
  );
}

export default Foodicons;
