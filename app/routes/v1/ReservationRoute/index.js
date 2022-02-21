const { addReservation, getReservationById, getAllReservations, deleteReservation, updateReservation } = require("../../../controllers/Reservation")
const router = require("express").Router()




router.post("/addReservation", async (req, res) => {
    let data = await addReservation(req.body)
    res.json(data)
})

router.get("/getReservationById/:id", async (req, res) => {
    let { id } = req.params
    let data = await getReservationById(id)
    res.json(data)
})

router.get("/getAllReservations", async (req, res) => {
    let data = await getAllReservations()
    res.json(data)
})

router.post("/deleteReservation/:id", async (req, res) => {
    let { id } = req.params
    let data = await deleteReservation(id)
    res.json(true)
})


router.post("/updateReservation", async (req, res) => {
    let data = await updateReservation(req.body)
    res.json(true)
})





module.exports = {
    ReservationRouter: router
}




