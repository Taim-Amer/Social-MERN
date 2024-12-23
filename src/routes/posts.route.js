import express from "express";
import { createPost, deletePost, updatePost, likePost, getPost } from "../controllers/post.controller.js";

const router = express.Router()

router.post("/", createPost)
router.put("/:id", updatePost)
router.delete("/:id", deletePost)
router.put("/:id/like", likePost)
router.get("/:id", getPost)

export default router;