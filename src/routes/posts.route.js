import express from "express";
import { createPost } from "../controllers/post.controller.js";

const router = express.Router()

router.post("/", createPost)

export default router;