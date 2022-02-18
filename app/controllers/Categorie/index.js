const { CategoriesModel } = require("../../models")


const addCategorie = async (data) => {
    try {
        let Categorie = await CategoriesModel.create(data)
        return Categorie
    } catch (error) {
        throw error
    }
}


const getCategorieById = async (id) => {
    try {
        let CategorieByID = await CategoriesModel.findById(id)
        return CategorieByID
    } catch (error) {
        throw error
    }
}

const getAllCategories = async () => {
    try {
        let Categories = await CategoriesModel.find()
        return Categories
    } catch (error) {
        throw error
    }

}


const deleteCategorie = async (id) => {
    try {
        await CategoriesModel.bulkWrite([
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

const updateCategorie = async (data) => {
    try {
        let { id } = data
        await CategoriesModel.bulkWrite([
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
    addCategorie,
    getCategorieById,
    getAllCategories,
    deleteCategorie,
    updateCategorie
}