// models/contact-model.js
const mongoose = require('mongoose');

const contact = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    minlength: [2, "First name must be at least 2 characters"],
    trim: true
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
    minlength: [2, "Last name must be at least 2 characters"],
    trim: true
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, "Email format is invalid"]
  },
  favoriteColor: {
    type: String,
    enum: ["red", "blue", "green", "yellow", "pink", "purple", "black", "white", null],
    default: null
  },
  birthday: {
    type: Date,
    required: false
  }
});

module.exports = mongoose.model('Contact', contact);
