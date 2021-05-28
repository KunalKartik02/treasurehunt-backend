const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  uId: String,
  fullName: String,
  email: String,
  uCode: String,
  answers: [
    {
      level: Number,
      time: Date,
    },
  ],
});

const users = mongoose.model("users", userSchema);
module.exports = users;
