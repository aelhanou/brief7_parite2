const { quayModel } = require("../../models")


const addQuay = async (data) => {
    try {
        let Quay = await quayModel.create(data)
        return Quay
    } catch (error) {
        throw error
    }
}


const getQuayById = async (id) => {
    try {
        let QuayByID = await quayModel.findById(id)
        return QuayByID
    } catch (error) {
        throw error
    }
}

const getAllQuays = async () => {
    try {
        let Quays = await quayModel.find()
        return Quays
    } catch (error) {
        throw error
    }

}


const deleteQuay = async (id) => {
    try {
        await quayModel.bulkWrite([
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

const updateQuay = async (data) => {
    try {
        let { id } = data
        await quayModel.bulkWrite([
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
    addQuay,
    getQuayById,
    getAllQuays,
    deleteQuay,
    updateQuay
}