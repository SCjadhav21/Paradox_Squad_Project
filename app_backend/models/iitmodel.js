const { Schema, model } = require("mongoose");

const iitSchema = new Schema(
    {
        title: String,
        link: String,
    }
);

const iitModel = model("iit", iitSchema);

module.exports = iitModel;