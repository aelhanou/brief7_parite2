const { Schema, model } = require("mongoose")

const CategoriesSchema = new Schema(
    {
        name: { type: String },
        description: { type: String },
    },
    { timestamps: true }
)

const CategoriesModel = model("Categories", CategoriesSchema);

module.exports = {
    CategoriesModel
}
