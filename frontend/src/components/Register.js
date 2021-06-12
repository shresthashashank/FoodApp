import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/auth.css";

function Register() {
  return (
    <div>
      <div className="register">
        <form onSubmit={(event) => register(event)} className="register-form">
          <div>
            <h1>REGISTER</h1>
          </div>
          <label for="name">Name </label>
          <input type="text" name="name" id="name"></input>
          <br />
          <label for="email">Email </label>
          <input type="email" name="email" id="email"></input>
          <br />
          <label for="password">Password</label>
          <input type="password" name="password" id="pass"></input>
          <br />
          <label for="email"> Re-enter Password</label>
          <input type="password" name="password" id="re_pass"></input>
          <button type="Submit"> Submit</button>
        </form>
      </div>

      <div>
        <Link className="link" to="/auth/login">
          Ready to Sign In?
        </Link>
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
