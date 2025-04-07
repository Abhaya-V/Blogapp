const mongoose = require("mongoose")
const blogSchema = mongoose.Schema({
    blogName:String,
    blogImageurl:String,
    blogDescription:String
    
})

const blogData = mongoose.model("blog",blogSchema)
module.exports = blogData