const mongoose = require('mongoose')

const userSchrma = new mongoose.Schema({
    firstName:String,
    lastName: String,
    email: String ,
    phone:String,
    location:String,
    password : String   //nonhashed password
})

const userModel = mongoose.model("users",userSchrma)
module.exports = userModel;