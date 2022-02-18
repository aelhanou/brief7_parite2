const { CommunicationChannelModel } = require("../../models")


const addCommunicationsChannel = async (data) => {
    try {
        let CommunicationsChannel = await CommunicationChannelModel.create(data)
        return CommunicationsChannel
    } catch (error) {
        throw error
    }
}


const getCommunicationsChannelById = async (id) => {
    try {
        let CommunicationsChannelByID = await CommunicationChannelModel.findById(id)
        return CommunicationsChannelByID
    } catch (error) {
        throw error
    }
}

const getAllCommunicationsChannels = async () => {
    try {
        let CommunicationsChannels = await CommunicationChannelModel.find()
        return CommunicationsChannels
    } catch (error) {
        throw error
    }

}


const deleteCommunicationsChannel = async (id) => {
    try {
        await CommunicationChannelModel.bulkWrite([
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

const updateCommunicationsChannel = async (data) => {
    try {
        let { id } = data
        await CommunicationChannelModel.bulkWrite([
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
    addCommunicationsChannel,
    getCommunicationsChannelById,
    getAllCommunicationsChannels,
    deleteCommunicationsChannel,
    updateCommunicationsChannel
}