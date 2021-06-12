const mongoose = require("mongoose");

//Creating an order schema.
const orderSchema = new mongoose.Schema({
  restaurant_id: { String },
  user_id: { String },
  items: { Array },
  subtotal: { String },
  date: {
    type: Date,
    default: Date.now,
  },
});

//Creating a model for the schema above

const Order = new mongoose.model("order", orderSchema);

module.exports = Order;
