const mongoose = require("mongoose");
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

exports.getUser = async function (req, res) {
  await users
    .find({ uId: req.params.uid })
    .select({ "uCode": 1 })
    .exec((error, result) => {
      if (error)
        return res.json({ status: 500, message: "Error", result: error }).end();
      if (!result)
        return res
          .json({ status: 404, message: "No data found", result: null })
          .end();
      return res.json({ status: 200, message: "Ok", result: result }).end();
    });
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
