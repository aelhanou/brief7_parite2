const router = require("express").Router()
const { register } = require("../../../controllers/register")




router.post("/register", async (req, res) => {
    let registerData = await register(req.body)
    console.log(registerData);
    res.json({ msg: true })
})



module.exports = {
    registerRouter: router
}




