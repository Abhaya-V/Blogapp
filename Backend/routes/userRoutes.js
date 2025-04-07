const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
router.use(express.json())
router.use(express.urlencoded({extended:true}))
const userModel = require("../model/userData")

router.post("/",async(req,res)=>{
    try{
        const data = req.body
        let newUser = await userModel(data).save()
        console.log(newUser)
        res.status(200).send({message:"Data added"})
    }catch(error){
        console.log(error)
    }
})

router.post('/login',async(req,res)=>{
   
    try {
        const user = await userModel.findOne({email:req.body.email})
        if(!user){
            res.status(404).send("user not found")
        }
        else{
            if(user.password == req.body.password){
                const payload = {email:user.email,password:user.password}
                const token = jwt.sign(payload,"blog")
                res.status(200).send({message:"login successfull",token:token})
            }
            else{
                res.status(404).send({message:"Invalid"})
            }
        }
    } catch (error) {
        res.status(400).send("error")
    }
})





module.exports = router