const { shipModel } = require("../../models")


const addShip = async (data) => {
    try {
        let ship = await shipModel.create(data)
        return ship
    } catch (error) {
        throw error
    }
}


const getShipById = async (id) => {
    try {
        let shipByID = await shipModel.findById(id)
        return shipByID
    } catch (error) {
        throw error
    }
}

const getAllShips = async () => {
    try {
        let ships = await shipModel.find()
        return ships
    } catch (error) {
        throw error
    }

}


const deleteShip = async (id) => {
    try {
        await shipModel.bulkWrite([
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

const updateShip = async (data) => {
    try {
        let { id } = data
        await shipModel.bulkWrite([
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
    addShip,
    getShipById,
    getAllShips,
    deleteShip,
    updateShip
}