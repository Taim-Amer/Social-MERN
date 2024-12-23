import express from "express";
import { createPost, deletePost, updatePost, likePost, getPost, getTimelinePosts } from "../controllers/post.controller.js";

const router = express.Router()

router.post("/", createPost)
router.put("/:id", updatePost)
router.delete("/:id", deletePost)
router.put("/:id/like", likePost)
router.get("/:id", getPost)
router.get("/timeline/all", getTimelinePosts)

export default router;