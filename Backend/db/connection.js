const mongoose = require("mongoose")
require("dotenv").config()
mongoose.connect(process.env.MONGODB_URL).then(() =>{
    console.log("connection established")
}).catch((err) =>{
    console.log(err)
    console.log("connection not established")
})