const express = require("express")
const upscModel = require("../models/upscmodel");
const upscRouter = express.Router();

upscRouter.get("/", async (req, res) => {
    let users = await upscModel.find();
    res.send(users);
})

module.exports = { upscRouter }