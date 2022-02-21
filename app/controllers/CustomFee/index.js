const { CustomFeesModel } = require("../../models")


const addCustomFee = async (data) => {
    try {
        let CustomFee = await CustomFeesModel.create(data)
        return CustomFee
    } catch (error) {
        throw error
    }
}


const getCustomFeeById = async (id) => {
    try {
        let CustomFeeByID = await CustomFeesModel.findById(id)
        return CustomFeeByID
    } catch (error) {
        throw error
    }
}

const getAllCustomFees = async () => {
    try {
        let CustomFees = await CustomFeesModel.find()
        return CustomFees
    } catch (error) {
        throw error
    }

}


const deleteCustomFee = async (id) => {
    try {
        await CustomFeesModel.bulkWrite([
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

const updateCustomFee = async (data) => {
    try {
        let { id } = data
        await CustomFeesModel.bulkWrite([
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
    addCustomFee,
    getCustomFeeById,
    getAllCustomFees,
    deleteCustomFee,
    updateCustomFee
}