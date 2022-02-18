const { Schema, model } = require("mongoose")

const BlockSchema = new Schema(
    {
        reference: { type: String },
        idStorageArea: {
            type: Schema.Types.ObjectId,
            ref: "StorageArea"
        },
        idCategories: {
            type: Schema.Types.ObjectId,
            ref: "Categories"
        },
        idBlock_part: [
            {
                type: Schema.Types.ObjectId,
                ref: "Block_Part"
            }
        ],
    },
    { timestamps: true }
)

const BlockModel = model("Block", BlockSchema);

module.exports = {
    BlockModel
}
