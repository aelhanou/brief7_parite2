const router = require("express").Router()
const { login } = require("../../../controllers/login");
const { generateToken } = require("../../../middlewares/jwt");


let secretKey = 'zer0'


router.post("/login", async (req, res) => {
    let token = ''
    let { _id, email, name } = await login(req.body)
    if (_id && email && name) {
        token = generateToken({ _id, email, name }, secretKey, 'admin')
    }
    res.json(token)
})



module.exports = {
    loginRouter: router
}




