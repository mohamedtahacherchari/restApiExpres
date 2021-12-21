const mongoose= require("mongoose")
const {Schema} = mongoose

const User = new Schema(
    {
        name: {type:String},
        age:Number,
        Data:[{type:String}]
    }
)
module.exports=mongoose.model("Users",User)