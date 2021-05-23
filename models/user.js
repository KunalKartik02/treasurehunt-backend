const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  uCode: String,
});

const users = mongoose.model('users', userSchema);
module.exports = users;
