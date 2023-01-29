const express = require("express");
const iitModel = require("../models/iitmodel");
const iitRouter = express.Router();

iitRouter.get("/", async (req, res) => {
  let users = await iitModel.find();
  res.send(users);
});
iitRouter.get("/:id", async (req, res) => {
  let id = req.params.id;
  let users = await iitModel.find({ _id: id });
  res.send(users);
});
module.exports = { iitRouter };
