let express = require("express");
const { PostModel } = require("../Models/postModel");
const PostsRouter=express.Router()



PostsRouter.get("/",(req,res)=>{
   res.send("you are gettimg all the routes")
    
})


PostsRouter.post("/create",async(req,res)=>{
    const payload=req.body
    const post =new PostModel(payload)
    await post.save()
    res.send("the post has been made")
    //due to time boundation i am skipping the try catch handliing err
})
PostsRouter.patch("/update/:id",async(req,res)=>{
    const PostId=req.params.id
    let payload=req.body
    await PostModel.findByIdAndUpdate({_id:PostId},payload)
    res.send({"msg":"updated"})
    
    })

PostsRouter.delete("/delete/:id",async(req,res)=>{
const PostId=req.params.id
await PostModel.findByIdAndDelete({_id:PostId})
res.send({"msg":"deleted"})

})

module.exports={
    PostsRouter
}