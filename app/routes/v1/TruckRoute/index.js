const { addTruck, getTruckById, getAllTrucks, deleteTruck, updateTruck } = require("../../../controllers/Truck")
const router = require("express").Router()




router.post("/addTruck", async (req, res) => {
    let data = await addTruck(req.body)
    res.json(data)
})

router.get("/getTruckById/:id", async (req, res) => {
    let { id } = req.params
    let data = await getTruckById(id)
    res.json(data)
})

router.get("/getAllTrucks", async (req, res) => {
    let data = await getAllTrucks()
    res.json(data)
})

router.post("/deleteTruck/:id", async (req, res) => {
    let { id } = req.params
    let data = await deleteTruck(id)
    res.json(true)
})


router.post("/updateTruck", async (req, res) => {
    let data = await updateTruck(req.body)
    res.json(true)
})





module.exports = {
    TruckRouter: router
}




