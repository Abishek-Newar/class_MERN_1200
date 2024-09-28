//import mongoose
const mongoose = require("mongoose")
require("dotenv").config()

//mongodb connection setup
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("mongoose connected")
})

//
const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    done: Boolean
})

const todo = mongoose.model("todo",todoSchema)

module.exports = todo