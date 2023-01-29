const express = require("express");
const bankingRouter = express();
const bankingModel = require("../models/bankingmodel");

bankingRouter.get("/", async (req, res) => {
  let users = await bankingModel.find();
  res.send(users);
});
bankingRouter.get("/:id", async (req, res) => {
  let id = req.params.id;
  let users = await bankingModel.find({ _id: id });
  res.send(users);
});

module.exports = { bankingRouter };
