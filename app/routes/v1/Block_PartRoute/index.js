const { addBlock_Part, getBlock_PartById, getAllBlock_Parts, deleteBlock_Part, updateBlock_Part } = require("../../../controllers/Block_Part")
const router = require("express").Router()




router.post("/addBlock_Part", async (req, res) => {
    let data = await addBlock_Part(req.body)
    res.json(data)
})

router.get("/getBlock_PartById/:id", async (req, res) => {
    let { id } = req.params
    let data = await getBlock_PartById(id)
    res.json(data)
})

router.get("/getAllBlock_Parts", async (req, res) => {
    let data = await getAllBlock_Parts()
    res.json(data)
})

router.post("/deleteBlock_Part/:id", async (req, res) => {
    let { id } = req.params
    let data = await deleteBlock_Part(id)
    res.json(true)
})


router.post("/updateBlock_Part", async (req, res) => {
    let data = await updateBlock_Part(req.body)
    res.json(true)
})





module.exports = {
    Block_PartRouter: router
}




