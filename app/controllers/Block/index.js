const { BlockModel } = require("../../models")


const addBlock = async (data) => {
    try {
        let Block = await BlockModel.create(data)
        return Block
    } catch (error) {
        throw error
    }
}


const getBlockById = async (id) => {
    try {
        let BlockByID = await BlockModel.findById(id)
        return BlockByID
    } catch (error) {
        throw error
    }
}

const getAllBlocks = async () => {
    try {
        let Blocks = await BlockModel.find()
        return Blocks
    } catch (error) {
        throw error
    }

}


const deleteBlock = async (id) => {
    try {
        await BlockModel.bulkWrite([
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

const updateBlock = async (data) => {
    try {
        let { id } = data
        await BlockModel.bulkWrite([
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
    addBlock,
    getBlockById,
    getAllBlocks,
    deleteBlock,
    updateBlock
}