import React from "react";
import "../css/restaurantfull.css";
import CustomizedDialogs from "../components/CustomizedDialogs";

function RestaurantFull(props) {
  return (
    <>
      <div className="img-res">
        <img className="brand_logo" src={props.image} alt="img"></img>

        <div className="tiles">
          <div className="overview">OVEVIEW</div>
          <div className="order">
            <CustomizedDialogs
              name={props.name}
              menu={props.menu}
              state={props.state}
              city={props.city}
              menu={props.menu}
              price={props.price}
            />
          </div>
          <div className="gallery">GALLERY</div>
          <div className="review">REVIEWS</div>
        </div>
        <div className="res-details">
          <div className="name">
            <h1>{props.name}</h1>
            <h2>
              {props.state} , {props.city}
            </h2>
          </div>
          <div className="left-details">
            <h5>Price Range</h5>
            <h5>Hours</h5>
            <p>
              Start: {props.start} , End:{props.end}
            </p>
          </div>
          <div className="right-details">
            <h5>Contact Number</h5>
            <p>123-456-789</p>
            <br />
            <h5>Social </h5>
            <p>Facebook , Instagram</p>

            <h5>Address</h5>
            <p>{props.address}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RestaurantFull;
