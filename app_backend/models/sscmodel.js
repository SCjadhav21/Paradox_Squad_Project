const { Schema, model } = require("mongoose");

const sscSchema = new Schema(
    {
        title: String,
        link: String,
    }
);

const sscModel = model("ssc", sscSchema);

module.exports = sscModel;