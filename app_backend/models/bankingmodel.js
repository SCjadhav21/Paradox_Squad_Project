const { Schema, model } = require("mongoose");

const bankingSchema = new Schema(
    {
        title: String,
        link: String,
    }
);

const bankingModel = model("banking", bankingSchema);

module.exports = bankingModel;