const { addShipOwner, getShipOwnerById, getAllShipOwners, deleteShipOwner, updateShipOwner } = require("../../../controllers/ShipOwner")
const router = require("express").Router()




router.post("/addShipOwner", async (req, res) => {
    let data = await addShipOwner(req.body)
    res.json(data)
})

router.get("/getShipOwnerById/:id", async (req, res) => {
    let { id } = req.params
    let data = await getShipOwnerById(id)
    res.json(data)
})

router.get("/getAllShipOwners", async (req, res) => {
    let data = await getAllShipOwners()
    res.json(data)
})

router.post("/deleteShipOwner/:id", async (req, res) => {
    let { id } = req.params
    let data = await deleteShipOwner(id)
    res.json(true)
})


router.post("/updateShipOwner", async (req, res) => {
    let data = await updateShipOwner(req.body)
    res.json(true)
})





module.exports = {
    ShipOwnerRouter: router
}




