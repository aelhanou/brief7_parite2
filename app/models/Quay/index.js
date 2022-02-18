const { Schema, model } = require("mongoose")


const quaySchema = new Schema(
    {
        reference: { type: String },
        status: { type: Boolean },
        idReservation: [
            {
                type: Schema.Types.ObjectId,
                ref: "Reservation",
            }
        ],
        idPort: {
            type: Schema.Types.ObjectId,
            ref: "Port",
        },
        idTYpe: {
            type: Schema.Types.ObjectId,
            ref: "Type",
        }
    },
    { timestamps: true }
)

const quayModel = model("Quay", quaySchema);

module.exports = {
    quayModel
}
