const express = require("express")
const router=express.Router();
const {m5}=require("../middleware/routerLevel")
router.use(m5)
router.post("/",(req,res)=>{
    res.json({
        success:true,
        message:"user added successfully"
    })
})
router.get("/",(req,res)=>{
    res.json({
        success:true,
        message:"all user data fetched successfully"
    })
})
router.get("/:id",(req,res)=>{
    res.json({
        success:true,
        message:"one user data fetched successfully"
    })
})
module.exports=router