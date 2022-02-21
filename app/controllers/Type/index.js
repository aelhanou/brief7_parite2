const { TruckModel } = require("../../models")


const addTruck = async (data) => {
    try {
        let Truck = await TruckModel.create(data)
        return Truck
    } catch (error) {
        throw error
    }
}


const getTruckById = async (id) => {
    try {
        let TruckByID = await TruckModel.findById(id)
        return TruckByID
    } catch (error) {
        throw error
    }
}

const getAllTrucks = async () => {
    try {
        let Trucks = await TruckModel.find()
        return Trucks
    } catch (error) {
        throw error
    }

}


const deleteTruck = async (id) => {
    try {
        await TruckModel.bulkWrite([
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

const updateTruck = async (data) => {
    try {
        let { id } = data
        await TruckModel.bulkWrite([
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
    addTruck,
    getTruckById,
    getAllTrucks,
    deleteTruck,
    updateTruck
}