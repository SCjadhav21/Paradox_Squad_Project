const { Schema, model } = require("mongoose");

const ndaSchema = new Schema(
    {
        title: String,
        link: String,
        src: String,
    }
);

const ndaModel = model("nda", ndaSchema);

module.exports = ndaModel;