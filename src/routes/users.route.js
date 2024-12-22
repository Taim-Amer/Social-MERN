import express from "express";
import { updateUser, deleteUser, getUser } from "../controllers/user.controller";

const router = express.Router()

router.put("/:id", updateUser)
router.delete("/:id", deleteUser)
router.get("/:id", getUser)


export default router;