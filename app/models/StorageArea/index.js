const { Schema, model } = require("mongoose")

const StorageAreaSchema = new Schema(
    {
        name: { type: String },
        idCommunicationChannel: [
            {
                type: Schema.Types.ObjectId,
                ref: "CommunicationChannel"
            }
        ],
        idBlock: [
            {
                type: Schema.Types.ObjectId,
                ref: "Block"
            }
        ]
    },
    { timestamps: true }
)

const StorageAreaModel = model("StorageArea", StorageAreaSchema);

module.exports = {
    StorageAreaModel
}
