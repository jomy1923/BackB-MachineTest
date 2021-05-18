const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const StoreSchema = new mongoose.Schema({

    StoreName:{
        type:String,   
        required:true
    },
    Latitude:{
        type:String,
        required:true
    },
    Longitude:{
        type:String,
        required:true
    },
    Radius:{
        type:Number,
        required:true
    }
        
},{timestamps:true})

mongoose.model('Store',StoreSchema)