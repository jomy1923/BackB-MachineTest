const mongoose = require('mongoose')
const Store = mongoose.model("Store")

function StoreController(){
    return{
       async allStore(req,res){
          
            let lat =parseFloat(req.query.lat)
            let lng =parseFloat(req.query.lng)
            console.log(parseFloat(req.query.lat));
            console.log(parseFloat(req.query.lng));

         let data= await Store.aggregate([
                {
                  $geoNear: {
                     near: { type: "Point", coordinates: [ lat , lng] },
                     distanceField: "dist.calculated",
                     maxDistance: 5000,
                     spherical: true,
                    result: { $and: [ { near: { type: "Point", coordinates: [ lat , lng] } }, { "dist.calculated": {  $lt:'$Radius'}
                    } ] }
                  }
                }
                
             ])
            //  console.log('data',data);
             .then((data)=>{
                 res.json(data)
             }).catch((err)=>{
                 console.log('err',err);
             })
             
          
        },
        addStore(req,res){
            const{StoreName,geometry,Radius}= req.body
            if(!StoreName || !geometry || !Radius){
               return res.json({error:'please enter all the fields in it'})
            }else{
                const store = new Store({
                    StoreName,
                    geometry,
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