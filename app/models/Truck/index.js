const { Schema, model } = require("mongoose")


const TruckSchema = new Schema(
    {
        matricule: { type: String },
        status: { type: String },
        idContainer: {
            type: Schema.Types.ObjectId,
            ref: "Container"
        },
        idUser: [
            {
                type: Schema.Types.ObjectId,
                ref: "User"
            }
        ],
        idDriver: [
            {
                type: Schema.Types.ObjectId,
                ref: "Driver"
            }
        ],
        idCommunicationsChannel: [
            {
                type: Schema.Types.ObjectId,
                ref: "CommunicationChannel"
            }
        ],
    },
    { timestamps: true }
)

const TruckModel = model("Truck", TruckSchema);

module.exports = {
    TruckModel
}
