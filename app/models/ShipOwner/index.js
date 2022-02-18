const { Schema, model } = require("mongoose")


const ShipOwnerSchema = new Schema(
    {
        name: { type: String },
        email: { type: String },
        phone: { type: String },
        description: { type: String },
        nationality: { type: String },
    },
    { timestamps: true }
)

const ShipeOwnerModel = model("ShipOwner", ShipOwnerSchema);

module.exports = {
    ShipeOwnerModel
}
