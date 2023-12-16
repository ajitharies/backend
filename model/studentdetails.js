const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://ajith:ajith@cluster0.in6v7gg.mongodb.net/jkk?retryWrites=true&w=majority")
.then(()=>{console.log("DB CONNECTED")})
.catch(err=>console.log(err));


// const studentschema=new mongoose.Schema({
//     Admno:Number,
//     Name:String,
//     Age:Number,
//     Course:String
    
// });
let sc=mongoose.Schema;
const studentschema=new sc({
        Admno:Number,
        Name:String,
        Age:Number,
        Course:String,
        image1:{
            data:Buffer,
            contentType:String
        }
        
    });

var studentmodel=mongoose.model("studentdetails",studentschema)
module.exports=studentmodel;

