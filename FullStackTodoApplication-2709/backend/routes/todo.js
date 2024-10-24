//todo routes
const express = require("express")
const {todo} = require("../db.js")

const todoRouter = express.Router()

//create todo
todoRouter.post("/create",async(req,res)=>{
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
todoRouter.get("/read",async(req,res)=>{
    try{
        const response = await todo.find({})
        res.json({response})
    }catch(e){
        res.json({msg: "error"})
    }
})

//update todo
todoRouter.put("/update",async(req,res)=>{
    const body = req.body
    try{
        const response = await todo.updateOne({
            _id: body.id
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
todoRouter.delete("/delete",async(req,res)=>{
    const body = req.query
    console.log(body)
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

module.exports = todoRouter;