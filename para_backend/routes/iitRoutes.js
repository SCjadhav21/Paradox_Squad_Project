const express = require("express")
const iitModel = require("../models/iitmodel");
const iitRouter = express.Router();

iitRouter.get("/", async (req, res) => {
    let users = await iitModel.find();
    res.send(users);
})

module.exports = { iitRouter }