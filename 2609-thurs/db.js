//importing mongoose
const mongoose = require("mongoose")

//connecting mongodb
mongoose.connect("")
.then(()=>{
    console.log("mongoose connected")
})

//schema creation
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    age: Number
})

//model creation
const user = mongoose.model("user",userSchema)

//module export
module.exports = user
