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

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
})

const todo = mongoose.model("todo",todoSchema)
const user = mongoose.model("user",userSchema)
module.exports = {todo, user}