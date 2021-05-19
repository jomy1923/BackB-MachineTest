const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types


const GeoSchema = new mongoose.Schema({
    type:{
        type:String,
        default:"Point"
    },
    coordinates:{
        type:[Number],
        index:"2dsphere"
    }
})


const StoreSchema = new mongoose.Schema({

    StoreName:{
        type:String,   
        required:[true, 'Please add a Store Name'],
        unique:true
    },
    Radius:{
        type:Number,
        required:[true, 'Please add store Radius'] 
    },
    geometry:GeoSchema
        
},{timestamps:true})

mongoose.model('Store',StoreSchema)