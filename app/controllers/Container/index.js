const { ContainerModel } = require("../../models")


const addContainer = async (data) => {
    try {
        let Container = await ContainerModel.create(data)
        return Container
    } catch (error) {
        throw error
    }
}


const getContainerById = async (id) => {
    try {
        let ContainerByID = await ContainerModel.findById(id)
        return ContainerByID
    } catch (error) {
        throw error
    }
}

const getAllContainers = async () => {
    try {
        let Containers = await ContainerModel.find()
        return Containers
    } catch (error) {
        throw error
    }

}


const deleteContainer = async (id) => {
    try {
        await ContainerModel.bulkWrite([
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

const updateContainer = async (data) => {
    try {
        let { id } = data
        await ContainerModel.bulkWrite([
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
    addContainer,
    getContainerById,
    getAllContainers,
    deleteContainer,
    updateContainer
}