const { addContainer, getContainerById, getAllContainers, deleteContainer, updateContainer } = require("../../../controllers/Container")
const router = require("express").Router()




router.post("/addContainer", async (req, res) => {
    let data = await addContainer(req.body)
    res.json(data)
})

router.get("/getContainerById/:id", async (req, res) => {
    let { id } = req.params
    let data = await getContainerById(id)
    res.json(data)
})

router.get("/getAllContainers", async (req, res) => {
    let data = await getAllContainers()
    res.json(data)
})

router.post("/deleteContainer/:id", async (req, res) => {
    let { id } = req.params
    let data = await deleteContainer(id)
    res.json(true)
})


router.post("/updateContainer", async (req, res) => {
    let data = await updateContainer(req.body)
    res.json(true)
})





module.exports = {
    ContainerRouter: router
}




