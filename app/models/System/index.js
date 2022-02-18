const { Schema, model } = require("mongoose")


const systemSchema = new Schema(
    {
        name: { type: String },
        description: { type: Boolean },
        storageDeadline: { type: String },
        lateShippingFee: { type: String },
        capacityPerQuais: { type: String },
        quaisFeePerDay: { type: String },
    },
    { timestamps: true }
)

const systemModel = model("System", systemSchema);

module.exports = {
    systemModel
}
