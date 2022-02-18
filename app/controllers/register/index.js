const { userModel } = require("../../models")



const register = async (data) => {
    try {
        let register = await userModel.create(data)
        return register
    } catch (error) {
        throw error
    }
}



module.exports ={ 
    register
}