//todo routes
const express = require("express")
const {todo} = require("../db.js")
const jwt = require("jsonwebtoken")
const todoRouter = express.Router()
const authMiddleware = require("../middleware/authMiddleware.js")
require("dotenv").config()

//body, headers,params,query
//create todo
todoRouter.use(authMiddleware)
todoRouter.post("/create",async(req,res)=>{
    const body = req.body
    const userId = req.userId
    try{
        
        const response = await todo.create({
            title: body.title,
            description: body.description,
            done: false,
            userId: userId
        })
        res.json({msg: "inserted"})
    }catch(e){
        console.log(e)
        res.json({msg: "error occured"})
    }
})

//read todo
todoRouter.get("/read",async(req,res)=>{
    const token = req.headers.authorization
    const userId = req.userId
    try{
        const userId = jwt.verify(token,process.env.SECRET_KEY)
        console.log(userId)
        if(!userId){
            return res.status(403).json({msg: "user id required"})
        }
        const response = await todo.find({userId: userId})
        res.json({response})
    }catch(e){
        res.json({msg: "error"})
    }
})

//update todo
todoRouter.put("/update",async(req,res)=>{
    const body = req.body
    const userId = req.userId
    try{
        const response = await todo.updateOne({
            _id: body.id
        },{
            title: body.title,
            description: body.description,
            done: true,
            userId:userId
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