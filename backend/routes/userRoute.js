"use strict";

module.exports = function (app) {
  var userList = require("../controller/userController");
  var reviewList = require("../controller/reviewController");
  app.route("/auth/register").post(userList.create_a_user);

  app.route("/users").get(userList.get_all_users);

  app.route("/users/:id").get(userList.get_a_user);

  app.route("/auth/login").post(userList.login);

  //app.route("/users/:id/reviews").get(userList.read_a_review);

  //List reviews placed by a specific user.
  app.route("/users/:user_id/reviews").get(reviewList.read_a_review_by_user);
};
