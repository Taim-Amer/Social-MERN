import User from "../models/user.model.js";
import bcrypt, { hash } from "bcrypt";

export const update = async (req, res) => {
    if(req.body.userId === req.params.id || res.user.isAdmin){
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