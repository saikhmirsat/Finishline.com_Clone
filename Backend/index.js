const express = require("express")
const { connection } = require("./config/db")
const { userRouts } = require("./routes/User.route")
const { productRoute } = require("./routes/Product.route")
require('dotenv').config()
var cors = require('cors')




const app = express()
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("This is Home of SportsZone")
    console.log("This is Home")
})

app.use("/users", userRouts)
app.use("/products", productRoute)

app.get("/", (req, res) => {
    res.send("This is Home")
    console.log("This is Home")
})






app.listen(process.env.port, async (req, res) => {
    try {
        await connection
        console.log("Connected to DB")
    } catch (err) {
        console.log("Can't Connect to DB")
    }
    console.log("Server Runing at port 4000")
})