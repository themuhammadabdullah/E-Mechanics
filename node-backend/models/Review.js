const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  review: { type: String, required: true }, 
  isDeleted: { type: Boolean, default: false },
  dateAdded: { type: Date, default: Date.now },
});
const Review = mongoose.model("Review", userSchema);

module.exports = Review;