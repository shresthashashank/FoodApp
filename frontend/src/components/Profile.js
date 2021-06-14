import React from "react";
import { withRouter } from "react-router-dom";

import { Redirect } from "react-router-dom";
import Banner from "./Banner";
import Navbarlogin from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Foodicons from "./Foodicons";
import OfferBig from "./OfferBig";

function Profile() {
  return (
    <div>
      <Banner />
      <Navbarlogin greeting="LOGOUT" />
      <Searchbar />
      <Foodicons />
      <OfferBig />
    </div>
  );
}

export default withRouter(Profile);
