const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  uId: {
    type: String,
    unique: true,
    required: true,
  },
  highestLevelPlayed: {
    type: Number,
    default: 0,
  },
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  uCode: {
    type: String,
    unique: true,
    required: true,
  },
  answers: [
    {
      level: Number,
      time: Date,
    },
  ],
});

const users = mongoose.model("users", userSchema);
module.exports = users;
