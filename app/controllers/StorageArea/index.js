const { StorageAreaModel } = require("../../models")


const addStorageArea = async (data) => {
    try {
        let StorageArea = await StorageAreaModel.create(data)
        return StorageArea
    } catch (error) {
        throw error
    }
}


const getStorageAreaById = async (id) => {
    try {
        let StorageAreaByID = await StorageAreaModel.findById(id)
        return StorageAreaByID
    } catch (error) {
        throw error
    }
}

const getAllStorageAreas = async () => {
    try {
        let StorageAreas = await StorageAreaModel.find()
        return StorageAreas
    } catch (error) {
        throw error
    }

}


const deleteStorageArea = async (id) => {
    try {
        await StorageAreaModel.bulkWrite([
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

const updateStorageArea = async (data) => {
    try {
        let { id } = data
        await StorageAreaModel.bulkWrite([
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
    addStorageArea,
    getStorageAreaById,
    getAllStorageAreas,
    deleteStorageArea,
    updateStorageArea
}