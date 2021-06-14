import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  useParams,
} from "react-router-dom";
import axios from "axios";
import Navbarlogin from "./Navbarlogin";
import RestaurantCards from "./RestaurantCards";

import Searchbarlogin from "./Seachbarlogin";

function Search() {
  let foodNametest = "";
  var filtered_foodName = "";
  var filtered_restaurant_name;
  const foodName = useParams().foodName;
  console.log(foodName);
  const [searchData, setSearchData] = useState([]);

  //setSearchData(filtered_restaurant_name);
  const url = "http://localhost:8001/restaurants/";

  useEffect(() => {
    axios
      .get(url)
      // .then((res) => res.json())
      .then((res) => {
        //This filter returns us a new array that contains data for the restaurants that
        //match the search criteria for the food.
        var filtered_foodName = res.data.results.filter((z) => {
          return z.menu.name.toLowerCase() === foodName.toLowerCase();
        });
        console.log(filtered_foodName);
        // console.log(filtered_foodName);
        //This maps through the filtered_foodName array and gives us only the
        //names of the restaurant
        filtered_restaurant_name = filtered_foodName.map((y) => {
          return y;
        });
        //console.log(filtered_restaurant_name);
        setSearchData(filtered_foodName); // We pass in the values of all available restaurants to setData.
        // console.log(searchData);
      })

      .catch((err) => {
        console.log(err);
      });
  }, [foodName]);

  return (
    <div>
      <div className="navbarlogin">
        <Navbarlogin greeting="SIGN IN " />
        <Searchbarlogin />
      </div>
      <br />
      <br />
      {/* <h1>Hello , you searched for {foodName}</h1> */}
      {/* {searchData.map((item) => (
        {/* <li>
          {item.name} : {item.Location.state} ,{item.Location.city} which costs
          you ${item.menu.unit_price}
        </li> */}

      {searchData.length > 0 ? (
        searchData.map((x) => {
          return (
            <RestaurantCards
              key={x._id}
              id={x._id}
              name={x.name}
              image={x.image}
              state={x.Location.state}
              city={x.Location.city}
            />
          );
        })
      ) : (
        <h2> No restaurants found where {foodName} is avaiable. Sorry!</h2>
      )}

      {/* <RestaurantCards data={searchData} />
      <br />
      <RestaurantCards data={searchData} />
      <br />
      <RestaurantCards data={searchData} /> */}

      {/* console.log(foodNametest);
      //Filters out all the names of the restaurants which matches the name of the food
      //typed out by the user
      var filtered_foodName = res.data.results.filter((z) => {
        return z.menu.name.toLowerCase() === foodName.toLowerCase();
      });
      // console.log(filtered_foodName);
      console.log(filtered_foodName);
      filtered_restaurant_name = filtered_foodName.map((y) => {
        return y.name;
      });
      console.log(filtered_restaurant_name);
      console.log(
        "Resturants with " +
          foodName +
          " on their menu are: " +
          filtered_restaurant_name
      );
      // setSearchData(filtered_restaurant_name);
      //console.log("Filtered_restaurant names : " + filtered_restaurant_name); */}
    </div>
  );
}

export default Search;
