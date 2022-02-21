const { addCategorie, getCategorieById, getAllCategories, deleteCategorie, updateCategorie } = require("../../../controllers/Categorie")
const router = require("express").Router()




router.post("/addCategorie", async (req, res) => {
    let data = await addCategorie(req.body)
    res.json(data)
})

router.get("/getCategorieById/:id", async (req, res) => {
    let { id } = req.params
    let data = await getCategorieById(id)
    res.json(data)
})

router.get("/getAllCategories", async (req, res) => {
    let data = await getAllCategories()
    res.json(data)
})

router.post("/deleteCategorie/:id", async (req, res) => {
    let { id } = req.params
    let data = await deleteCategorie(id)
    res.json(true)
})


router.post("/updateCategorie", async (req, res) => {
    let data = await updateCategorie(req.body)
    res.json(true)
})





module.exports = {
    CategorieRouter: router
}




