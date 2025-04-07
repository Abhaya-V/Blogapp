const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken")
router.use(express.json())
router.use(express.urlencoded({extended:true}))
const Blog = require("../model/blogData");


function verifytoken(req,res,next){
 const token = req.headers.token
 try{
    if (!token) throw "unauthorized access"
    const payload = jwt.verify(token,"blog")
    if(!payload) throw "unauthorized access"
    next()
 }catch(error){
    res.status(404).send(error)
 }
}

router.post("/add",verifytoken, async (req, res) => {
    try {
        const newBlog = new Blog(req.body);
        await newBlog.save();
        res.status(200).json({ message: "Blog added successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Error adding blog"});
    }
});


router.get("/",verifytoken, async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ error: "Error fetching blogs" });
    }
});

router.put("/update/:id", verifytoken,async (req, res) => {
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBlog) {
            return res.status(404).json({ error: "Blog not found" });
        }
        res.status(200).json({ message: "Blog updated successfully!", updatedBlog });
    } catch (error) {
        res.status(500).json({ error: "Error updating blog" });
    }
});

router.delete("/delete/:id",verifytoken, async (req, res) => {
    try {
      await Blog.findByIdAndDelete(req.params.id);
      res.json({ message: "Blog deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete Blog" });
    }
  });
module.exports = router;