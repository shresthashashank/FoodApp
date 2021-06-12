"use strict";
module.exports = function (app) {
  var restaurantList = require("../controller/restaurantController");

  //  Routes
  app
    .route("/restaurants")
    .get(restaurantList.list_all_restaurant)
    .post(restaurantList.create_a_restaurant);

  app
    .route("/restaurants/:id")
    .get(restaurantList.get_a_restaurant)
    .patch(restaurantList.update_a_restaurant)
    .delete(restaurantList.delete_a_restaurant);
};

// app.route("/restaurants/search");
