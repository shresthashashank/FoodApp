import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/register.css";

function Register() {
  return (
    <div className="full">
      <div className="register-bg">
        <div className="register">
          <form onSubmit={(event) => register(event)} className="register-form">
            <div>
              <h1 className="login-head">REGISTER</h1>
            </div>

            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
            ></input>
            <br />

            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            ></input>
            <br />

            <input
              type="password"
              name="password"
              id="pass"
              placeholder="Password"
            ></input>
            <br />

            <input
              type="password"
              name="password"
              id="re_pass"
              placeholder="Re-enter Password"
            ></input>
            <br />
            <br />
            <button type="Submit"> Submit</button>
          </form>
        </div>

        <div>
          <Link className="link" to="/auth/login">
            <h2>Ready to Sign In?</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

function register(event) {
  event.preventDefault();
  let request = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("pass").value,
    // re_pass: document.getElementById("re_pass").value,
  };

  //We passed in request as the body, Axios returns a promise so it resolves or rejects
  axios
    .post("http://localhost:8001/auth/register", request)
    .then((res) => {
      alert(res.data.message);
      window.location = "/auth/login";
    })
    .catch((err) => {
      console.log(err);
    });
}

export default Register;
