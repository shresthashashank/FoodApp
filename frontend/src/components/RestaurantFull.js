import React, { useContext } from "react";
import "../css/restaurantfull.css";
import Reviews from "../components/Reviews";
import CustomizedDialogs from "../components/CustomizedDialogs";
import { ThemeContext } from "../components/Auth";

function RestaurantFull(props) {
  var isLogged = props.status;
  return (
    <>
      <div className="img-res">
        <img className="brand_logo_big" src={props.image} alt="img"></img>

        <div className="tiles">
          <div className="overview">OVEVIEW</div>
          <div className="order">
            {isLogged ? (
              <CustomizedDialogs
                text="Order Online"
                name={props.name}
                menu={props.menu}
                state={props.state}
                city={props.city}
                price={props.price}
              />
            ) : null}
          </div>
          <div className="gallery">GALLERY</div>
          <div className="review">
            <a href="#revv">REVIEWS</a>
          </div>
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

            <h5>Addresss</h5>
            <p>{props.address}</p>
            <img
              className="foodimg"
              src="https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="foodimg"
            ></img>
          </div>
          {/* <div className="Reviews">
            <Reviews />
          </div>
          <div className="Reviews">
            <Reviews />
          </div>
          <div className="Reviews">
            <Reviews />
          </div> */}
          <div className="review-details">
            <div className="details-item">
              {" "}
              <h3>Food</h3>
              <h5>4.1 🦐</h5>
              <p>Good</p>
            </div>
            <div className="details-item env">
              {" "}
              <h3>Environment</h3>
              <h5>3.9 🕊️</h5>
              <p>Decent</p>
            </div>

            <div className="details-item ser">
              <h3>Service</h3>
              <h5>4.6 🛎️</h5>
              <p>Perfect</p>
            </div>
            <div className="details-item pri">
              <h3>Price</h3>
              <h5>4.3 💰</h5>
              <p>High</p>
            </div>
            {isLogged ? (
              <div>
                <h1>Add review</h1>
              </div>
            ) : null}
          </div>
          <div className="menu">
            <h1>Menu</h1>
            <img
              className="food-menu"
              src="https://foodhub211.netlify.app/images/css/menu-1.jpg"
              alt="img"
            ></img>

            <img
              className="food-menu"
              src="https://foodhub211.netlify.app/images/css/menu-2.jpg"
              alt="img"
            ></img>

            <img
              className="food-menu"
              src="https://foodhub211.netlify.app/images/css/menu-3.jpg"
              alt="img"
            ></img>

            <img
              className="food-menu"
              src="https://foodhub211.netlify.app/images/css/menu-4.jpg"
              alt="img"
            ></img>
            <img
              className="food-menu"
              src="https://foodhub211.netlify.app/images/css/menu-5.jpg"
              alt="img"
            ></img>

            <div id="revv" className="Reviews">
              <h1 className="rev">Reviews</h1>
              <Reviews />
              <br />
              <Reviews />
              <br />
              <Reviews />
              <br />
              <Reviews />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RestaurantFull;
