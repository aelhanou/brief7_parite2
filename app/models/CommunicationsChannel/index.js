const { Schema, model } = require("mongoose")

const CommunicationChannelSchema = new Schema(
    {
        message: { type: String },
        idStorageArea: {
            type: Schema.Types.ObjectId,
            ref: "StorageArea"
        },
        idTruck: {
            type: Schema.Types.ObjectId,
            ref: "Truck"
        },
    },
    { timestamps: true }
)

const CommunicationChannelModel = model("CommunicationChannel", CommunicationChannelSchema);

module.exports = {
    CommunicationChannelModel
}
