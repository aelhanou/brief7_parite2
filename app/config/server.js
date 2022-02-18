const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors");
const { router } = require("../routes")

require("dotenv").config()


const runServer = () => {
    const PORT = process.env.PORT
    const DB_HOST = process.env.DB_HOST

    const app = express()
    

    app.use(cors())
    app.use(express.json());
    // parse requests of content-type - application/x-www-form-urlencoded
    app.use(express.urlencoded({ extended: true }));



    app.use(router)

    mongoose.connect(DB_HOST, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("connected");
    })
    app.listen(PORT, () => {
        console.log(`Server is Running in Port: ${PORT} http://localhost:${PORT}`);
    })
}


module.exports = {
    runServer
}