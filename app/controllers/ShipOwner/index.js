const { ShipOwnerModel } = require("../../models")


const addShipOwner = async (data) => {
    try {
        let ShipOwner = await ShipOwnerModel.create(data)
        return ShipOwner
    } catch (error) {
        throw error
    }
}


const getShipOwnerById = async (id) => {
    try {
        let ShipOwnerByID = await ShipOwnerModel.findById(id)
        return ShipOwnerByID
    } catch (error) {
        throw error
    }
}

const getAllShipOwners = async () => {
    try {
        let ShipOwners = await ShipOwnerModel.find()
        return ShipOwners
    } catch (error) {
        throw error
    }

}


const deleteShipOwner = async (id) => {
    try {
        await ShipOwnerModel.bulkWrite([
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

const updateShipOwner = async (data) => {
    try {
        let { id } = data
        await ShipOwnerModel.bulkWrite([
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
    addShipOwner,
    getShipOwnerById,
    getAllShipOwners,
    deleteShipOwner,
    updateShipOwner
}