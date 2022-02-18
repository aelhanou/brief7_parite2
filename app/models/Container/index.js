const { Schema, model } = require("mongoose")


const ContainerSchema = new Schema(
    {
        reference: { type: String },
        weight: { type: String },
        dimensions: { type: String },
        brand: { type: String },
        serviceDate: { type: String },
        importStatus: { type: String },
        customFeesStatus: { type: String },
        certificat: { type: String },
        idCustomFees: {
            type: Schema.Types.ObjectId,
            ref: "CustomFees"
        },
        idUser: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        idShip: {
            type: Schema.Types.ObjectId,
            ref: "Ship"
        },
        idTruck: {
            type: Schema.Types.ObjectId,
            ref: "Truck"
        },
        idCategorie: {
            type: Schema.Types.ObjectId,
            ref: "Categories"
        },
        idBlock_Part: {
            type: Schema.Types.ObjectId,
            ref: "Block_Part"
        },
    },
    { timestamps: true }
)

const ContainerModel = model("Container", ContainerSchema);

module.exports = {
    ContainerModel
}
