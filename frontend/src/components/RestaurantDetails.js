import React, { useState, useEffect } from "react";

import Navbarlogin from "./Navbarlogin";
import Searchbarlogin from "../components/Seachbarlogin";
import RestaurantFull from "./RestaurantFull";
import {
  BrowserRouter as Router,
  Link,
  Route,
  useParams,
} from "react-router-dom";
import axios from "axios";

function RestaurantDetails() {
  const ID = useParams().restaurantID;
  console.log("ID from URL: " + ID);
  const url = "http://localhost:8001/restaurants/";

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
        console.log(restaurantData);
      })

      .catch((err) => {
        console.log(err);
      });
  }, [ID]);

  return (
    <div className="main">
      <Navbarlogin greeting="Welcome" />
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
          />
        );
      })}
    </div>
  );
}

export default RestaurantDetails;
