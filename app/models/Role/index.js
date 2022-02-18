const { Schema, model } = require("mongoose")


const roleSchema = new Schema(
    {
        reference: { type: String },
        descriptions: { type: String },
        
    },
    { timestamps: true }
)

const roleModel = model("Role", roleSchema);

module.exports = {
    roleModel
}
