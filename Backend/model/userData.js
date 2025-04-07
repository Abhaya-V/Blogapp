const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    email:String,
    password:String,
    phone:String
    
})

const userData = mongoose.model("user",userSchema)
module.exports = userData