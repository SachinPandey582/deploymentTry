const express=require("express")
const { connection } = require("./Config/db")
const { authentication } = require("./MiddleWares/authentication")
const { PostsRouter } = require("./Routes/Post.routes")
const { UserRouter } = require("./Routes/User.routes")
require('dotenv').config()
const app=express()
app.use(express.json())
app.use("/users",UserRouter)

app.use(authentication)
app.use("/posts",PostsRouter)

app.get("/",(req,res)=>{
    res.send("the thunder Client is working")
})


app.listen(process.env.port,async()=>{
    try{
        await connection
console.log("server is running")
    }catch(err){
console.log("the server is not running ")
    }
    
})