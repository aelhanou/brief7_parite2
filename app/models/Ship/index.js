const { Schema, model } = require("mongoose")


const shipSchema = new Schema(
    {
        name: { type: String },
        capacity: { type: String },
        nationality: { type: String },
        type: { type: String },
        idShipOwner: {
            type: Schema.Types.ObjectId,
            ref: "ShipOwner",
        },
        idReservation: [
            {
                type: Schema.Types.ObjectId,
                ref: "Reservation",
            }
        ],
        idContainer: [
            {
                type: Schema.Types.ObjectId,
                ref: "Container",
            }
        ],
    },
    { timestamps: true }
)

const shipModel = model("Ship", shipSchema);

module.exports = {
    shipModel
}
