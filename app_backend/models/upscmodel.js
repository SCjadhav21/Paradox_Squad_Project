const { Schema, model } = require("mongoose");

const upscSchema = new Schema(
    {
        title: String,
        link: String,
    }
);

const upscModel = model("upsc", upscSchema);

module.exports = upscModel;