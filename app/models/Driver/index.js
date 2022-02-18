const { Schema, model } = require("mongoose")


const DriverSchema = new Schema(
    {
        name: { type: String },
        age: { type: String },
        driverLicenseIndex: { type: String }
    },
    { timestamps: true }
)

const DriverModel = model("Driver", DriverSchema);

module.exports = {
    DriverModel
}
