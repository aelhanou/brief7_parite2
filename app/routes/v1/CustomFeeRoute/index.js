const { addCustomFee, getCustomFeeById, getAllCustomFees, deleteCustomFee, updateCustomFee } = require("../../../controllers/CustomFee")
const router = require("express").Router()




router.post("/addCustomFee", async (req, res) => {
    let data = await addCustomFee(req.body)
    res.json(data)
})

router.get("/getCustomFeeById/:id", async (req, res) => {
    let { id } = req.params
    let data = await getCustomFeeById(id)
    res.json(data)
})

router.get("/getAllCustomFees", async (req, res) => {
    let data = await getAllCustomFees()
    res.json(data)
})

router.post("/deleteCustomFee/:id", async (req, res) => {
    let { id } = req.params
    let data = await deleteCustomFee(id)
    res.json(true)
})


router.post("/updateCustomFee", async (req, res) => {
    let data = await updateCustomFee(req.body)
    res.json(true)
})





module.exports = {
    CustomFeeRouter: router
}




