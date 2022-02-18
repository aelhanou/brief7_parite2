const { Schema, model } = require("mongoose")

const CommunicationChannelSchema = new Schema(
    {
        message: { type: String },
        dateCreated: { type: String },
        idStorageArea: {
            type: Schema.Types.ObjectId,
            ref: "StorageArea"
        },
    },
    { timestamps: true }
)

const CommunicationChannelModel = model("CommunicationChannel", CommunicationChannelSchema);

module.exports = {
    CommunicationChannelModel
}
