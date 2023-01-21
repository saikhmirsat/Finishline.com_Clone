const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');
const { UserModel } = require("../model/user.model")

const express = require("express")

const userRouts = express.Router()

userRouts.post("/register", (req, res) => {
    const { firstname, lastname, dob, email, password } = req.body
    try {
        bcrypt.hash(password, 7, async (err, securepasword) => {
            if (err) {
                console.log(err)
            } else {
                const user = new UserModel({ firstname, lastname, dob, email, password: securepasword })
                await user.save()

                res.send("Register Sucessfull")
            }
        });

    }
    catch (err) {
        console.log(err)
        res.send("Can't register")
    }
})


userRouts.post("/login", async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await UserModel.find({ email })
        console.log(user)

        if (user.length > 0) {
            bcrypt.compare(password, user[0].password, (err, result) => {
                if (result) {
                    const token = jwt.sign({ course: 'backend' }, 'masai')
                    res.send({ msg: "Login Sucessful", token: token })
                } else {
                    res.send("wrong Credential")
                }
            });
        } else {
            res.send("Wrong credentials")
        }
    }
    catch (err) {
        res.send("Wrong")
    }

})

module.exports = {
    userRouts
}

