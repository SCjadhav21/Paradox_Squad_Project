const { Schema, model } = require("mongoose");

const bankingSchema = new Schema(
    {
        title: String,
        link: String,
        src: String,
    }
);

const bankingModel = model("banking", bankingSchema);

module.exports = bankingModel;