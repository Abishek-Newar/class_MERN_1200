const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("mongoose connected")
})

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    password: String
})

const chatSchema = new mongoose.Schema({
    message: String,
    from: String,
    to: String,
    time: Date
})

const user = mongoose.model("user",userSchema)
const chat = mongoose.model("chat",chatSchema)

module.exports = {user, chat}