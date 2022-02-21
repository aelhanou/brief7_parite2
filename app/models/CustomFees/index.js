const { Schema, model } = require("mongoose")


const CustomFeesSchema = new Schema(
    {
        amount: { type: String },
        description: { type: String },
        idCategories: [
            {
                type: Schema.Types.ObjectId,
                ref: "Categories"
            }
        ]
    },
    { timestamps: true }
)

const CustomFeesModel = model("CustomFees", CustomFeesSchema);

module.exports = {
    CustomFeesModel
}
