// models/User.js
const mongoose = require("mongoose");

// Define the shape of a User document
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number },
});

// Export the model so server.js can use it
module.exports = mongoose.model("User", userSchema);
