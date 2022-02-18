const { userModel } = require("../../models")



const login = async ({email, password}) => {
    try {
        let log = await userModel.findOne({ email, password })
        return log
    } catch (error) {
        throw error
    }
}



module.exports = {
    login
}