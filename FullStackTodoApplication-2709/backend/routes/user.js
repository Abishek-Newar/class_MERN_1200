//user routes
const express = require("express")
const {user} = require("../db.js")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const userRouter = express.Router()

//signup
userRouter.post("/signup",async(req,res)=>{
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
        console.log(users)
        const token = jwt.sign(users._id.toHexString(),process.env.SECRET_KEY)
        res.json({token: token})
    } catch(e){
        console.log("error",e)
        res.status(403).json({msg: "error while creating user"})
    }
})


userRouter.post("/login",async(req,res)=>{
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
        const token = jwt.sign(users._id.toHexString(),process.env.SECRET_KEY)
        res.json({token: token})
    }catch(e){
        console.log("error while login",e)
        res.status(403).json("error while login")
    }
})

module.exports = userRouter