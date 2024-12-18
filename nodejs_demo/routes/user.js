const express = require("express")
const jwt = require("jsonwebtoken")
const {user} = require("../db")
const bcrypt = require("bcrypt")
require("dotenv").config()
const userRouter = express.Router()


//signup route

userRouter.post("/signup",async(req,res)=>{
    //ask for data
    const body = req.body;
    const salt = 10
    try {
        //check if user already exist
        const check = await user.findOne({email: body.email})
        if(check){
            return res.json({msg: "user already exist"})
        }
        console.log(body)
        const hashedpass = await bcrypt.hash(body.password,salt)
        
        console.log(hashedpass)
        //data entry
        const response = await user.create({
            name: body.name,
            email: body.email,
            password: hashedpass
        })
        const token = jwt.sign(response._id.toHexString(),process.env.JWT_SECRET)
        res.json({
            msg: "user created",
            token: token
        })

    } catch (error) {
        console.log("error in signup",error)
        return res.json({msg: "error while signup"})
    }
})
//login route
userRouter.post("/login",async(req,res)=>{
    //request body
    const body = req.body;
    try {
        //check the user
        const check = await user.findOne({
            email: body.email
        })
        //if not found
        if(!check){
            return res.json({msg: "user does not exist please signup"})
        }

        const comparePass = await  bcrypt.compare(body.password,check.password)
        if(!comparePass){
            return res.json({
                msg: "incorrect password"
            })
        }
        //if found
        const token = jwt.sign(check._id.toHexString(),process.env.JWT_SECRET)
        res.json({
            msg: "user created",
            token: token
        })
    } catch (error) {
        console.log("error while login",error)
        return res.json({msg: "error while login"})
    }
})



module.exports = userRouter