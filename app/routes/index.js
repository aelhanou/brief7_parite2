const router = require("express").Router()

const { registerRouter, loginRouter } = require("./v1")



router.use(registerRouter)
router.use(loginRouter)


module.exports = {
    router
}