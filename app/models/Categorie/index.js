const { Schema, model } = require("mongoose")

const CategoriesSchema = new Schema(
    {
        name: { type: String },
        description: { type: String },
        idContainers: [
            {
                type: Schema.Types.ObjectId,
                ref: "Containers"
            }
        ],
        idBlock: [
            {
                type: Schema.Types.ObjectId,
                ref: "Block"
            }
        ],
    },
    { timestamps: true }
)

const CategoriesModel = model("Categories", CategoriesSchema);

module.exports = {
    CategoriesModel
}
