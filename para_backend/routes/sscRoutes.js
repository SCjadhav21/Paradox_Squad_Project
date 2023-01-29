const express = require("express")
const sscModel = require("../models/sscmodel");
const sscRouter = express.Router();

sscRouter.get("/", async (req, res) => {
    let users = await sscModel.find();
    res.send(users);
})

module.exports = { sscRouter }