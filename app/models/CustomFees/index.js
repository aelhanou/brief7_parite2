const { Schema, model } = require("mongoose")


const CustomFeesSchema = new Schema(
    {
        montant: { type: String },
        description: { type: String },
        idContainer: [
            {
                type: Schema.Types.ObjectId,
                ref: "Container"
            }
        ],
    },
    { timestamps: true }
)

const CustomFeesModel = model("CustomFees", CustomFeesSchema);

module.exports = {
    CustomFeesModel
}
