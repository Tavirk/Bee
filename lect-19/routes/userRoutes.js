const express=require("express");

const routers=express.Router()
const blog=require("../Model/blog")
routers.use(express.json());
const {postadduser,getreaduser,getoneuser}=require("../controller/usercontroller")
routers.post("/",postadduser)
routers.get("/",getreaduser)
routers.get("/:id",getoneuser)

app.use(express.urlencoded({ extended: true }))
const Users = require("../Model/user");
const Blogs = require("../Model/blog");
routers.post("/users", async(req, res)=>{
    let {email, username, password} = req.body

    let newUser = new Users({
        email: email,
        username: username,
        password: password
    })
    await newUser.save();
    res.json({
        success: true,
        data: newUser,
        message: "User added successfully"
    })
})
routers.get("/users", async(req, res)=>{
    let allUsers = await Users.find();
    res.json({
        success: true,
        data: allUsers
    })
})
routers.get("/users/:id", async(req, res)=>{
    let {id} = req.params
    let user = await Users.findOne({_id:id}).populate("blogs")
    if(user){
        res.json({
            success: true,
            data: user
        })
    }
})
module.exports=routers;