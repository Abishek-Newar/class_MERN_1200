const jwt = require("jsonwebtoken")

function authMiddleware(req,res,next){
    const token = req.headers.authorization
    try {
        const userId = jwt.verify(token,process.env.SECRET_KEY)
        console.log(userId)
        if(!userId){
            return res.status(403).json({msg: "user id required"})
        }
        req.userId = userId
        next()
    } catch (error) {
        res.status(403).json("jwt required")
    }
}

module.exports = authMiddleware