require('dotenv').config()


let mongoose=require("mongoose")
mongoose.set('strictQuery', true)
let connection =mongoose.connect(process.env.mongooseServer)

module.exports={
    connection
}
// mongodb+srv://sachinpandey:sachinpandey@cluster0.ijlptdk.mongodb.net/linkedinapp?retryWrites=true&w=majority