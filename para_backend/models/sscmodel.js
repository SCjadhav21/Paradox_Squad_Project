const { Schema, model } = require("mongoose");

const sscSchema = new Schema(
    {
        title: String,
        link: String,
        src: String,
    }
);

const sscModel = model("ssc", sscSchema);

module.exports = sscModel;