const express = require("express")
const cors = require("cors")
const userRouter = require("./routes/user")
const chatRouter = require("./routes/chat")
require("dotenv").config()
const app = express()
const PORT = process.env.PORT || 8080
app.use(cors())
app.use(express.json())
app.use("/user",userRouter)
app.use("/chat",chatRouter)

app.listen(PORT,()=>{
    console.log("port conencted")
})