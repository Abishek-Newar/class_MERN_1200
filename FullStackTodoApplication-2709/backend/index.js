const express = require("express")
const {todo} = require("./db.js")
const {user} = require("./db.js")
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
app.delete("/delete",async(req,res)=>{
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

//signup
app.post("/signup",async(req,res)=>{
    const body = req.body;

    try{
        //check user in database
        const check = await user.findOne({email: body.email})
        //if user already exists return user already exists
        if(check){
            return res.status(401).json({msg: "user already exists"})
        }
        //if user doesn't exist create an user
        const users = await user.create({
            username: body.username,
            email: body.email,
            password: body.password
        })

        res.json({msg: "account created"})
    } catch(e){
        console.log("error",e)
        res.status(403).json({msg: "error while creating user"})
    }
})


app.post("/login",async(req,res)=>{
    const body = req.body;

    try{
        //check user in database
        const users = await user.findOne({
            email: body.email,
            password: body.password
        })
        //if user doesn't exist return user doesn't exists
        if(!users){
            return res.status(403).json({msg: "user doesn't exist"})
        }
        //return login successful
        res.json({msg: "login sucessful"})
    }catch(e){
        console.log("error while login",e)
        res.status(403).json("error while login")
    }
})

app.listen(3000,()=>{
    console.log("port connected")
})