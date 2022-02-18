const { Schema, model } = require("mongoose")


const portSchema = new Schema(
    {
        name: { type: String },
        description: { type: Boolean },
        idSystem: {
            type: Schema.Types.ObjectId,
            ref: "System"
        }
    },
    { timestamps: true }
)

const portModel = model("Port", portSchema);

module.exports = {
    portModel
}
