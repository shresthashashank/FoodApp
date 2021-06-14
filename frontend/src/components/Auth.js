import React from "react";

import "../css/auth.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
const bcrypt = require("bcryptjs");

function Auth(props) {
  const history = useHistory();
  // const [email, setEmail] = useState("");

  // function handleChange(event) {
  //   setEmail(event.target.value);
  //   return email;
  // }

  function login(event) {
    event.preventDefault();
    // const emails = handleChange();
    // console.log(emails);

    let request = {
      // name: document.getElementById("name").value,
      email: document.getElementById("emails").value,
      password: document.getElementById("passwd").value,
    };
    // console.log(request);

    //We passed in request as the body, Axios returns a promise so it resolves or rejects
    axios
      .post("http://localhost:8001/auth/login", request)
      .then((res) => {
        alert(res.data.message);
        var login_message = res.data.message;
        var isLoggedIn = false;
        if (login_message === "Login Successful") {
          // localStorage.setItem("token", res.data);
          isLoggedIn = true;
          console.log(res.data);
        }
        var isLoggedinvalue = isLoggedIn;

        //Passing the value back to the parent component app.
        props.data(isLoggedIn);

        isLoggedinvalue ? history.push("/profile") : alert(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="authbg">
      <div className="login">
        <form onSubmit={login} className="login-form">
          <div>
            <h1 className="login-head">LOGIN</h1>
            <br />
          </div>
          {/* <label for="name">Name</label>
          <input type="name" name="name" id="name"></input>
          <br /> */}
          {/* <label for="email">Email </label> */}
          <input
            // onChange={handleChange}
            type="email"
            name="email"
            id="emails"
            placeholder="Enter your email"
          ></input>
          <br />
          {/* <label for="password">Password</label> */}
          <input
            type="password"
            name="password"
            id="passwd"
            placeholder="Password"
          ></input>
          <br />

          <br />
          <button>Login</button>
        </form>
      </div>

      <div className="signuplink">
        <Link className="links" to="/auth/register">
          Sign UP
        </Link>
      </div>
    </div>
  );
}

export default Auth;
