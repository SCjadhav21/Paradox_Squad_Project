const express = require("express");
const sscModel = require("../models/sscmodel");
const sscRouter = express.Router();

sscRouter.get("/", async (req, res) => {
  let users = await sscModel.find();
  res.send(users);
});
sscRouter.get("/:id", async (req, res) => {
  let id = req.params.id;
  let users = await sscModel.find({ _id: id });
  res.send(users);
});

module.exports = { sscRouter };
