const { Schema, model } = require("mongoose")


const reservationsSchema = new Schema(
    {
        dateCheckIn: { type: Date },
        dateCheckOut: { type: Date },
        numberOfContainer: { type: String },
        idUser: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        idShip: {
            type: Schema.Types.ObjectId,
            ref: "Ship",
        },
        idQuay: {
            type: Schema.Types.ObjectId,
            ref: "Quay",
        },
    },
    { timestamps: true }
)

const reservationModel = model("Reservation", reservationsSchema);

module.exports = {
    reservationModel
}
