const {  Block_PartModel } = require("../../models")


const addBlock_Part = async (data) => {
    try {
        let Block_Part = await Block_PartModel.create(data)
        return Block
    } catch (error) {
        throw error
    }
}


const getBlock_PartById = async (id) => {
    try {
        let Block_PartByID = await Block_PartModel.findById(id)
        return Block_PartByID
    } catch (error) {
        throw error
    }
}

const getAllBlock_Parts = async () => {
    try {
        let Block_Part = await Block_PartModel.find()
        return Block_Part
    } catch (error) {
        throw error
    }

}


const deleteBlock_Part = async (id) => {
    try {
        await Block_PartModel.bulkWrite([
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

const updateBlock_Part = async (data) => {
    try {
        let { id } = data
        await Block_PartModel.bulkWrite([
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
    addBlock_Part,
    getBlock_PartById,
    getAllBlock_Parts,
    deleteBlock_Part,
    updateBlock_Part
}