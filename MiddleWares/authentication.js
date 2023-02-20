const jwt =require("jsonwebtoken")

const authentication =(req,res,next)=>{
    const token =req.headers.authorization
    if(token){
        jwt.verify(token,"sammy",(err,decoded)=>{
            if(decoded){
                next()
            }else{
                res.send({"msg":"please login sadfsd"})
            }
        })
    }else{
        res.send({"msg":"please login"})
    }
}
module.exports={
    authentication
}