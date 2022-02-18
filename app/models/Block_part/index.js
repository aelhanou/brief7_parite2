const { Schema, model } = require("mongoose")

const Block_PartSchema = new Schema(
    {
        x_index: { type: String },
        y_index: { type: String },
        z_index: { type: String },
        idBlock: {
            type: Schema.Types.ObjectId,
            ref: "Block"
        },
        idContainers: {
            type: Schema.Types.ObjectId,
            ref: "Containers"
        },
    },
    { timestamps: true }
)

const Block_PartModel = model("Block_Part", Block_PartSchema);

module.exports = {
    Block_PartModel
}
