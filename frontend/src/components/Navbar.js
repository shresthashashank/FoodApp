import React from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="navBar">
      <div className="nav-items">
        {/* <div> */}
        <Link className="links one" to="/auth/login">
          {props.greeting}
        </Link>
        {/* </div> */}
        {/* <div> */}
        <Link className="links two" to="#">
          FOOD PHOTOGRAPHY
        </Link>
        {/* </div> */}
        {/* <div> */}
        <Link className="links three" to="/main/blog">
          BLOG
        </Link>
        {/* </div> */}
        <div>
          <Link className="links four" to="#">
            ABOUT US
          </Link>
        </div>
      </div>
      <Link className="homelogo" to="/">
        <img
          className="logo"
          src="https://www.jplcomputer.co.uk/wp-content/uploads/2020/07/logo.png"
        ></img>
      </Link>
    </div>
  );
}

export default Navbar;
