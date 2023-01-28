const { Schema, model } = require("mongoose");

const neetSchema = new Schema(
    {
        title: String,
        link: String,
    }
);

const neetModel = model("neet", neetSchema);

module.exports = neetModel;