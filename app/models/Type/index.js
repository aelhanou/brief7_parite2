const { Schema, model } = require("mongoose")


const typeSchema = new Schema(
    {
        name: { type: String },
        description: { type: Boolean }
    },
    { timestamps: true }
)

const typeModel = model("Type", typeSchema);

module.exports = {
    typeModel
}
