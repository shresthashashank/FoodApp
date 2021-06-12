"use strict";
module.exports = function (app) {
  var reviewList = require("../controller/reviewController");

  app
    .route("/restaurants/:id/reviews")
    .get(reviewList.read_a_review) // List restaurant review
    .post(reviewList.post_a_review); //Post a review with user id

  // app.route("/users/:restaurant_id/reviews").get(reviewList.read_a_review);

  app.route("/reviews").get(reviewList.list_all_reviews);

  app
    .route("/restaurants/:id/reviews/:reviewId")
    .delete(reviewList.delete_restaurant_review);
};
