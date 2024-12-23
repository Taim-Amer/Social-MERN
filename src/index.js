import morgan from "morgan";
import helmet from "helmet";
import express from "express";
import dotenv from "dotenv";

import { connectDB } from "../src/lib/mongo.js";
import usersRoutes from "../src/routes/users.route.js";
import authRoutes from "../src/routes/auth.route.js";
import postsRoutes from "../src/routes/posts.route.js";

dotenv.config()
const app = express()

app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.use("/api/users", usersRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/posts", postsRoutes)

app.listen(process.env.PORT, () => {
    console.log("Server is running on port:" + process.env.PORT)
    connectDB()
})