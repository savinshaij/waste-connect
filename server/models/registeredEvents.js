const mongoose = require('mongoose')

const eventSchrma = new mongoose.Schema({
    email: String ,
    events:[{
         name:String,
         serviceName:String,
         period:String,
         phone:String,
         collectorCount:String,
         currentDate: String,
         eventDate: String,
         location:String, 
         details:String
    }],
    
})

const registeredEventsModel = mongoose.model("userEvent",eventSchrma)
module.exports = registeredEventsModel;