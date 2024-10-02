const express = require("express")
const todo = require("./db.js")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())
//data accepting
//body, headers, parameters, query

//create todo
app.post("/create",async(req,res)=>{
    const body = req.body
    try{
        const response = await todo.create({
            title: body.title,
            description: body.description,
            done: false
        })
        res.json({msg: "inserted"})
    }catch(e){
        console.log(error)
        res.json({msg: "error occured"})
    }
})
//read todo
app.get("/read",async(req,res)=>{
    try{
        const response = await todo.find({})
        res.json({response})
    }catch(e){
        res.json({msg: "error"})
    }
})

//update todo
app.put("/update",async(req,res)=>{
    const body = req.body
    try{
        const response = await todo.updateOne({
            title: "HTML"
        },{
            title: body.title,
            description: body.description,
            done: true
        })
        res.json({msg: "updated"})
    }catch(e){
        console.log(error)
        res.json({msg: "error occured"})
    }
})

//delete todo
app.delete("/delete",async(req,res)=>{
    const body = req.body
    try{
        const response = await todo.deleteOne({
            _id: body.id
        })
        res.json({msg: "deleted"})
    }catch(e){
        console.log(error)
        res.json({msg: "error occured"})
    }
})


app.listen(3000,()=>{
    console.log("port connected")
})