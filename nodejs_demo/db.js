//importing mongoose
const mongoose = require("mongoose")

require("dotenv").config()
//connecting to database
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("mongodb connected")
})
.catch((error)=>{
    console.log("error while connecting to database",error)
})

//declaration of schema
const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    done: Boolean,
    createdBy: String
})


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

//data modeling
const todo = mongoose.model("todo",todoSchema)
const user = mongoose.model("user",userSchema)
//exporting as a module
module.exports = {todo,user}