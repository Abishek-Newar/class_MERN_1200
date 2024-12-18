const express = require("express")
const {todo} = require("../db");
const authMiddleware = require("../middlewares/authMiddleware");


const todoRouter = express.Router()

//CRUD
//C -> create  ->POST
todoRouter.post("/create",authMiddleware,async(req,res)=>{
    const body = req.body;
    try {
        const response = await todo.create({
            title: body.title,
            description: body.description,
            done: false
        })
        res.send("todo added")
    } catch (error) {
        console.log("error while adding todo",error)
        res.send("error")
    }
})

//R -> READ -> GET
todoRouter.get("/get",async(req,res)=>{
    try {
        const response = await todo.find({});
        res.json(response)
    } catch (error) {
        console.log("error while getting data",error)
        res.send("error while getting data")
    }
})

//U -> update -> put 
todoRouter.put("/put",async(req,res)=>{
    const body = req.body
    try {
        const response = await todo.updateOne({_id: body.id},{
            title: body.title,
            description: body.descrption,
            done: false
        })
        res.send("updated")
    } catch (error) {
        console.log("error while updating data",error)
        res.send("error while updating data")
    }
})

//D -> Delete -> delete 
todoRouter.delete("/delete",async(req,res)=>{
    const body = req.body
    try {
        const response = await todo.deleteOne({_id: body.id})
        res.send("todo deleted")
    } catch (error) {
        console.log("error while deleting data",error)
        res.send("error while deeleting data")
    }
})




module.exports = todoRouter