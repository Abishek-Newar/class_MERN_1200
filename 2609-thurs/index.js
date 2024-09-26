const express = require("express")
const user = require("./db.js")
const app = express()

app.use(express.json())
app.post("/adddata",async(req,res)=>{
    const data = req.body;
    console.log(data)
    const response = await user.create({
        username: data.username,
        email: data.email,
        age: data.age
    })
    res.json({response})
})


app.listen(3000,()=>{
    console.log("server connected")
})