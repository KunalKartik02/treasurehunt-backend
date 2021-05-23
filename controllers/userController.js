const { Mongoose } = require("mongoose");
const users = require("../models/user");

exports.getAllUsers = async function (req, res) {
  try {
    const allUsers = await users.find();
    res
      .status(200)
      .json({ status: res.statusCode, message: "OK", data: allUsers });
  } catch (error) {
    res.status(404).json({ status: "error", message: error });
  }
};

exports.createUsers = async function (req, res) {
  try {
    const newUser = await users.create(req.body);
    res
      .status(200)
      .json({ status: res.statusCode, message: "OK", data: newUser });
  } catch (error) {
    res.status(404).json({ status: "error", message: error });
  }
};
