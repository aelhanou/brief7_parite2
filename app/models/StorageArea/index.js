const { Schema, model } = require("mongoose")

const StorageAreaSchema = new Schema(
    {
        name: { type: String }
    },
    { timestamps: true }
)

const StorageAreaModel = model("StorageArea", StorageAreaSchema);

module.exports = {
    StorageAreaModel
}
