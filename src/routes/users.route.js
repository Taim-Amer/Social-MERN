import express from "express";
import { updateUser, deleteUser, getUser, followUser } from "../controllers/user.controller";

const router = express.Router()

router.put("/:id", updateUser)
router.delete("/:id", deleteUser)
router.get("/:id", getUser)
router.put("/:id/follow", followUser)
router.put("/:id/unfollow", unfollowUser)


export default router;