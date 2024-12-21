const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express()

mongoose.connect(process.env.MONGODB_URI, { newUserUrlParser : true, useUnifiedTopology: true }, () => {
    console.log("Connected to database")
})

//Middleware 

app.listen(8800, () => {
    console.log("Backend server is running")
})