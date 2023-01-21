const express = require("express")
const { connection } = require("./config/db")
const { userRouts } = require("./router/User.route")

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.send("This is Home")
    console.log("This is Home")
})

app.use("/users", userRouts)

app.listen(4500, async (req, res) => {
    try {
        await connection
        console.log("Connected to DB")
    } catch (err) {
        console.log("Can't Connect to DB")
    }
    console.log("Server Runing at port 4500")
})