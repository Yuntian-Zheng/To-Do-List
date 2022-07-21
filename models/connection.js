require("dotenv").config()
const mongoose = require("mongoose")
const DATABASE_URI = process.env.DATABASE_URI

const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(DATABASE_URI, config)

mongoose.connection
    .on("connected", () => {
        console.log(`connected to mongoose ${mongoose.connection.host}:${mongoose.connection.port}`)
    })
    .on("close", () => {
        console.log("disconnected from mongoose")
    })
    .on("error", err => {
        console.error(err)
    })

module.exports = mongoose