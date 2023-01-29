const express = require("express");
const upscModel = require("../models/upscmodel");
const upscRouter = express.Router();

upscRouter.get("/", async (req, res) => {
  let users = await upscModel.find();
  res.send(users);
});
upscRouter.get("/:id", async (req, res) => {
  let id = req.params.id;
  let users = await upscModel.find({ _id: id });
  res.send(users);
});

module.exports = { upscRouter };
