"use strict";

const mongoose = require("mongoose");
const Users = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "asdasdsad!@#!@#!!#@#!@3asdQ#4#$$#43q42wq43q2sdffdsdfsd";
// var users = [
//   {
//     email: "abc@gmail.com",
//     password: "pass",
//   },
// ];

//Getting list of all users
exports.get_all_users = function (req, res) {
  Users.find({}, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json({ results: data });
    }
  });
};

//Getting one user
exports.get_a_user = function (req, res) {
  Users.findById(req.params.id, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
};

//Registering a user.
exports.create_a_user = async (req, res) => {
  const { password } = req.body;
  const newUser = new Users({
    name: req.body.name,
    email: req.body.email,
    password: await bcrypt.hash(password, 10),
    // re_pass: req.body.re_pass,
  });

  newUser.save(function (err) {
    if (err) {
      console.log(err);
      // } else if (newUser.re_pass != newUser.password) {
      //   res.send({
      //     message: "Passwords do not match",
      //   });
    } else
      res.status(200).send({
        message: "Registration successful.",
      });
  });
};

//Logging in a user
exports.login = async (req, res) => {
  const { email, password } = req.body;

  //Checking if the email address of the user exists in the database.
  let result = await Users.findOne({ email });

  if (result) {
    if (await bcrypt.compare(password, result.password)) {
      //const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET);

      res.status(200).send({
        message: "Login Successful",
      });
    } else {
      res.status(200).send({
        message: "Password incorrect",
      });
    }
  } else {
    res.status(200).send({
      message: "User not found",
    });
  }
};

//Deleting a user
exports.delete_a_user = (req, res) => {};
