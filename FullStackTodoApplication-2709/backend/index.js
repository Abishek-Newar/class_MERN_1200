//imports
const express = require("express")
const cors = require("cors")
const userRouter = require("./routes/user.js")
const todoRouter = require("./routes/todo.js")


//web app create
const app = express()


//configurations
app.use(express.json())
app.use(cors())

//set routes
app.use("/user",userRouter)
app.use("/todo",todoRouter)




//listen
app.listen(3000,()=>{
    console.log("port connected")
})