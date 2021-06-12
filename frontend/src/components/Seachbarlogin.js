import React, { useState } from "react";
import axios from "axios";
import "../css/Searchlogin.css";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import { cssHooks } from "jquery";

function Searchbarlogin() {
  const history = useHistory();
  let searchRestaurantRequest = "";
  let searchMovie = "";
  // let movieName = "";
  let foodName = "";

  const [searchValue, setSearchValue] = useState("");
  //const [change, setChange] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    // const url = "http://localhost:8001/restaurants/";
    // axios
    //   .get(url)
    //   .then((res) => {
    //     //console.log(res.data.results[0].Location.city);
    //     console.log(searchValue);
    //     movieName = res.data.results[0].name;
    //     movieNametest = res.data.results.map((item, searchValue) => {

    //     });
    foodName = searchValue;
    history.push(`/main/restaurants/search/${foodName}`);
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
  }

  return (
    <div className="search_login">
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          className="food-search_login"
          type="text"
          name="search by food"
          placeholder="    Search By Foods"
        ></input>
        <input
          className="location_login"
          type="text"
          name="location"
          placeholder="    location"
        ></input>

        <button type="submit">
          <img
            className="search-icon_login"
            src="https://cdn4.iconfinder.com/data/icons/round-buttons/512/red_search.png"
          ></img>
        </button>
      </form>
    </div>
  );
}

export default Searchbarlogin;
