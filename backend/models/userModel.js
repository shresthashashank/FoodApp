const mongoose = require("mongoose");

//Creating a user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

//Creating a model for the schema.
//const Users = mongoose.model("user", userSchema);

//Exporting the user model
module.exports = mongoose.model("user", userSchema);
