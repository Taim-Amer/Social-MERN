import User from "../models/user.model.js";

import bcrypt from "bcrypt"

export const register = async (req, res) => {
    try{
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        const newUser = await new User({
            username: req.body.username,
            email: req.body.password,
            password: hashedPassword
        })

        const user = await newUser.save()
        res.status(200).json(user)
    } catch(error){
        console.log(error.message)
    }
}

export const login = async (req, res) => {
    try{
        const user = await User.findOne({ email : req.email.body })
        !user && res.status(404).json("User not found")

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(404).json("Wrong password")

        res.status(200).json(user)
    } catch(error){
        console.log(error.message)
        res.status(500).json(error)
    }
}