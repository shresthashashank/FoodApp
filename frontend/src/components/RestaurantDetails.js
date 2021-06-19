import React, { useState, useEffect } from "react";

import Navbarsearched from "./Navbarsearched";
import Navbarlogin from "./Navbarlogin";
import Searchbarlogin from "../components/Seachbarlogin";
import RestaurantFull from "./RestaurantFull";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import axios from "axios";

function RestaurantDetails(props) {
  const ID = useParams().restaurantID;
  const status = props.loggedInStatus;
  console.log("ID from URL: " + ID);
  const url = "http://localhost:8001/restaurants/";
  console.log("Thee login status is : " + props.loggedInStatus);
  var filtered_restaurants = "";

  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        filtered_restaurants = res.data.results.filter((x) => {
          return x._id === ID;
        });
        setRestaurantData(filtered_restaurants);
        console.log(filtered_restaurants);
      })

      .catch((err) => {
        console.log(err);
      });
  }, [ID]);

  return (
    <div className="main">
      {status ? (
        <Navbarlogin greeting="Logout" />
      ) : (
        <Navbarsearched greeting="Sign In" />
      )}
      <Searchbarlogin />

      {restaurantData.map((x) => {
        return (
          <RestaurantFull
            key={x._id}
            id={x._id}
            name={x.name}
            image={x.image}
            state={x.Location.state}
            city={x.Location.city}
            address={x.Location.address}
            start={x.Hours.start}
            end={x.Hours.end}
            menu={x.menu.name}
            price={x.menu.unit_price}
            status={props.loggedInStatus}
          />
        );
      })}
    </div>
  );
}

export default RestaurantDetails;
