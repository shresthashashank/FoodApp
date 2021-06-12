"use strict";

var mongoose = require("mongoose"),
  Restaurants = mongoose.model("restaurant");

//Getting all the names of the restaurants.
exports.list_all_restaurant = function (req, res) {
  Restaurants.find({}, function (err, task) {
    if (err) res.send(err);
    res.json({ results: task });
  });
};

//POST request , creating a restaurant
exports.create_a_restaurant = function (req, res) {
  var new_task = new Restaurants(req.body);
  new_task.save(function (err, task) {
    if (err) res.send(err);
    //res.send("Restaurant created successfully.");
    res.json(task);
  });
};

// Finding a particular restaurant by ID
exports.get_a_restaurant = function (req, res) {
  Restaurants.findById(req.params.id, function (err, task) {
    if (err) res.send(err);
    res.json({ results: task });
  });
};

//Updating one restaurant
exports.update_a_restaurant = function (req, res) {
  Restaurants.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    function (err, task) {
      if (err) res.send(err);
      res.json({ results: task });
    }
  );
};

//Deleting a restaurant baseed on their ID
exports.delete_a_restaurant = function (req, res) {
  Restaurants.remove(
    {
      _id: req.params.id,
    },
    function (err, task) {
      if (err) res.send(err);
      res.json({ message: "Task successfully deleted" });
    }
  );
};
