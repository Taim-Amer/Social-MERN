import User from "../models/user.model.js";
import bcrypt, { hash } from "bcrypt";

export const updateUser = async (req, res) => {
    if(req.body.userId === req.params.id || req.body.isAdmin){
        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(10)
                req.body.password = await bcrypt.hash(req.body.password, salt)
            } catch(error){
                return res.status(500).json(error.message)
            }
        }
        try{
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            })
            res.status(200).json("Account has been updated")
        } catch(error) {
            return res.status(500).json(error.message)
        }
    } else{
        return res.status(403).json("You can update only your account")
    }
}

export const deleteUser = async (req, res) => {
    if(req.body.userId === req.params.id || req.body.isAdmin){
        try{
            const user = await User.findByIdAndDelete(req.params.id)
            res.status(200).json("Account has been deleted")
        } catch(error) {
            return res.status(500).json(error.message)
        }
    } else{
        return res.status(403).json("You can delete only your account")
    }
}

export const getUser = async (req, res) => {
    try{
        const user = User.findById(req.params.id)
        const { password, updatedAt, ...other} = user._doc
        res.status(200).json(other)
    } catch(error){
        res.status(500).json(error)
    }
}

export const followUser = a