import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbarlogin.css";

function Navbarlogin(props) {
  // function logoutHandler(props) {
  //   props.data(false);
  //   console.log("abra ka dabra" + props.data);
  // }
  console.log("Hello" + props.data);

  return (
    <div className="navBarLogin">
      <div className="nav-itemsLogin">
        {" "}
        <div>
          {" "}
          <Link className="linksLogin onea" to="/">
            {props.greeting}
          </Link>
        </div>
        <div>
          <Link className="linksLogin twoa" to="/main/cart">
            {props.cart}
          </Link>
        </div>
        <div>
          <Link className="linksLogin threea" to="#">
            Food Photography
          </Link>
        </div>
        <div>
          <Link className="linksLogin foura" to="/main/blog">
            Blog
          </Link>
        </div>
        <div>
          <Link className="linksLogin fivea" to="#">
            About Us
          </Link>
        </div>
      </div>
      <Link className="homelogo" to="/">
        <img
          className="logo"
          src="https://www.jplcomputer.co.uk/wp-content/uploads/2020/07/logo.png"
          alt="img"
        ></img>
      </Link>
    </div>
  );
}

export default Navbarlogin;
