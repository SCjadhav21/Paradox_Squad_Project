const express = require("express")
const neetModel = require("../models/neetmodel");
const neetRouter = express.Router();

neetRouter.get("/", async (req, res) => {
    let users = await neetModel.find();
    res.send(users);
})

module.exports = { neetRouter }