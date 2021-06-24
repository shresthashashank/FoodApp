"use strict";

var mongoose = require("mongoose"),
  Reviews = mongoose.model("review");
const review = require("../models/reviewModel");
const restaurants = require("../models/restuarantModel");

//Getting all the names of the restaurants.
exports.list_all_reviews = function (req, res) {
  Reviews.find({}, function (err, task) {
    if (err) res.send(err);
    res.json({ review: task });
  });
};

exports.post_a_review = function (req, res) {
  var new_task = new Reviews(req.body);
  new_task.save(function (err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.read_a_review = function (req, res) {
  Reviews.findOne({ _id: req.params.id }, function (err, task) {
    if (err) res.send(err);
    res.json(task);
  }).populate("_id");
};

exports.read_a_review_by_user = function (req, res) {
  Reviews.findById(req.params.user_id, function (err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.update_a_task = function (req, res) {
  Reviews.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    function (err, task) {
      if (err) res.send(err);
      res.json(task);
    }
  );
};

exports.delete_restaurant_review = function (req, res) {
  Reviews.remove(
    {
      _id: req.params.id,
    },
    function (err, review_details) {
      if (err) res.send(err);
      else
        Reviews.remove(
          {
            _id: req.params.reviewId,
          },
          function (err, review_details) {
            if (err) res.send(err);
            res.json("Deleted Successfully");
          }
        );
    }
  );
};
