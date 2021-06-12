const mongoose = require("mongoose");

//Creating a model for the reviews of the restaurants

const reviewSchema = new mongoose.Schema({
  restaurant_id: { type: String },
  user_id: { type: String },
  food: { type: Number },
  service: { type: Number },
  environment: { type: Number },
  price: { type: Number },
  comment: { type: String },
});

const Reviews = mongoose.model("review", reviewSchema);

module.exports = Reviews;
