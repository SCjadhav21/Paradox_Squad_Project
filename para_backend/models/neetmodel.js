const { Schema, model } = require("mongoose");

const neetSchema = new Schema(
    {
        title: String,
        link: String,
        src: String,
    }
);

const neetModel = model("neet", neetSchema);

module.exports = neetModel;