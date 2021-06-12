const mongoose = require("mongoose");

//Creating a resturant model
const restaurantsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Please enter the name of the resaurant",
  },
  image: {
    type: String,
  },
  Hours: {
    start: {
      type: String,
    },
    end: {
      type: String,
    },
  },
  Location: {
    state: {
      type: String,
    },
    city: {
      type: String,
    },
    zipCode: {
      type: Number,
    },
    address: {
      type: String,
    },
  },
  menu: {
    name: {
      type: String,
    },
    unit_price: {
      type: String,
    },
    type: {
      type: String,
    },
    user_id: { type: String },
  },
});

const Restaurants = mongoose.model("restaurant", restaurantsSchema);

module.exports = Restaurants;
