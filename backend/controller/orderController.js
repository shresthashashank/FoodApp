//Require mongoose and order model

const Order = require("../models/orderModel");

const mongoose = require("mongoose"),
  Orders = mongoose.model("order");

//Getting all orders of a restaurant
exports.get_all_orders = function (req, res) {
  Orders.find({}, function (err, order_details) {
    if (err) res.send(err);
    res.json(order_details);
  });
};

//Placing an order
exports.post_an_order = function (req, res) {
  var new_order = new Orders(req.body);
  new_order.save(function (err, order_details) {
    if (err) res.send(err);
    res.json(order_details);
  });
};

//List orders placed by a specific user on a restaurant
exports.get_order_by_user_on_res = function (req, res) {
  Orders.findById(req.params.id, function (err, order_details) {
    if (err) res.send(err);
    else
      Order.findById(req.params.userId),
        (err, order_details) => {
          if (err) res.send(err);
          res.json(order_details);
        };
  });
};

//List orders placed by a user (on any restaurant)
exports.get_order_by_a_user = function (req, res) {
  Orders.findById(req.params.user_id, (err, order_details) => {
    if (err) res.send(err);
    res.json(order_details);
  });
};
