const { Schema, model } = require("mongoose")


const userSchema = new Schema(
    {
        name: { type: String },
        password: { type: String },
        email: { type: String },
        nationality: { type: String },
        organisation: { type: String },
        role: { type: String },
        idReservation: [
            {
                type: Schema.Types.ObjectId,
                ref: "reservation"
            }
        ],
        idContainer: [
            {
                type: Schema.Types.ObjectId,
                ref: "Containers"
            }
        ],
        idTruck: {
                type: Schema.Types.ObjectId,
                ref: "Truck"
            },
    },
    { timestamps: true }
)

const userModel = model("User", userSchema);

module.exports = {
    userModel
}
