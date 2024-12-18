const jwt = require("jsonwebtoken")
require("dotenv").config()
function authMiddleware(req,res,next){
    const token = req.headers.authorization

    try {
        const verify = jwt.verify(token,process.env.JWT_SECRET)
        if(!verify){
            res.json("token required")
        }
        next()
    } catch (error) {
        console.log("error in authMIddleware",error)
        res.json({msg: "error in auth middleware"})
    }
}


module.exports = authMiddleware