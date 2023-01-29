const express = require("express")
const bankingRouter = express()
const bankingModel = require("../models/bankingmodel");

bankingRouter.get("/", async (req, res) => {
    let users = await bankingModel.find();
    res.send(users);
})

module.exports = { bankingRouter }