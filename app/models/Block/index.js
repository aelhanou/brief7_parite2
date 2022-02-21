const { Schema, model } = require("mongoose")

const BlockSchema = new Schema(
    {
        idStorageArea: {
            type: Schema.Types.ObjectId,
            ref: "StorageArea"
        },
        idCategories: {
            type: Schema.Types.ObjectId,
            ref: "Categories"
        },
    },
    { timestamps: true }
)

const BlockModel = model("Block", BlockSchema);

module.exports = {
    BlockModel
}
