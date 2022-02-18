const { DriverModel } = require("../../models")


const addDriver = async (data) => {
    try {
        let Driver = await DriverModel.create(data)
        return Driver
    } catch (error) {
        throw error
    }
}


const getDriverById = async (id) => {
    try {
        let DriverByID = await DriverModel.findById(id)
        return DriverByID
    } catch (error) {
        throw error
    }
}

const getAllDrivers = async () => {
    try {
        let Drivers = await DriverModel.find()
        return Drivers
    } catch (error) {
        throw error
    }

}


const deleteDriver = async (id) => {
    try {
        await DriverModel.bulkWrite([
            {
                deleteOne: {
                    filter: { _id: id }
                }
            }
        ])
    } catch (error) {
        throw error
    }

}

const updateDriver = async (data) => {
    try {
        let { id } = data
        await DriverModel.bulkWrite([
            {
                updateOne: {
                    filter: { _id: id },
                    update: data
                }
            }
        ])
    } catch (error) {
        throw error
    }
}



module.exports = {
    addDriver,
    getDriverById,
    getAllDrivers,
    deleteDriver,
    updateDriver
}