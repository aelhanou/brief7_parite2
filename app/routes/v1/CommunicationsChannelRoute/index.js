const { addCommunicationsChannel, getCommunicationsChannelById, getAllCommunicationsChannels, deleteCommunicationsChannel, updateCommunicationsChannel } = require("../../../controllers/CommunicationChannel")

const router = require("express").Router()




router.post("/addCommunicationsChannel", async (req, res) => {
    let data = await addCommunicationsChannel(req.body)
    res.json(data)
})

router.get("/getCommunicationsChannelById/:id", async (req, res) => {
    let { id } = req.params
    let data = await getCommunicationsChannelById(id)
    res.json(data)
})

router.get("/getAllCommunicationsChannels", async (req, res) => {
    let data = await getAllCommunicationsChannels()
    res.json(data)
})

router.post("/deleteCommunicationsChannel/:id", async (req, res) => {
    let { id } = req.params
    let data = await deleteCommunicationsChannel(id)
    res.json(true)
})


router.post("/updateCommunicationsChannel", async (req, res) => {
    let data = await updateCommunicationsChannel(req.body)
    res.json(true)
})





module.exports = {
    CommunicationsChannelRouter: router
}




