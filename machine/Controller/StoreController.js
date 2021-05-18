const mongoose = require('mongoose')
const Store = mongoose.model("Store")

function StoreController(){
    return{
        allStore(req,res){
            Store.find().then((Data)=>{
                res.json({Data})
            }).catch((err)=>{
            
                console.log('err45',err);
            })
        },
        addStore(req,res){
            const{StoreName,Latitude,Longitude,Radius}= req.body
            if(!StoreName || !Latitude || !Longitude || !Radius){
               return res.json({error:'please enter all the fields in it'})
            }else{
                const store = new Store({
                    StoreName,
                    Latitude,
                    Longitude,
                    Radius
                })
                store.save().then((result)=>{
                
                    res.json({Store:result})
                }).catch((err)=>{
                    console.log('err23',err);
                })
                
            }
        }

    }
}
module.exports=StoreController