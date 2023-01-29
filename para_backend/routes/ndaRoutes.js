const express = require("express")
const ndaModel = require("../models/ndamodel");
const ndaRouter = express.Router();

ndaRouter.get("/", async (req, res) => {
    let users = await ndaModel.find();
    res.send(users);
})

module.exports = { ndaRouter }