const express=require("express");

const router=express.Router()
const blog=require("../Model/blog")
router.use(express.json());
const {postaddblog,getreadblog,getoneblog,deleteoneblog}=require("../controller/blogcontroller")
router.post("/".postaddblog)
router.get("/",getreadblog)
router.get("/:id",getoneblog)
router.delete("/:blogid",deleteoneblog)
app.use(express.urlencoded({ extended: true }))
const Users = require("../Model/user");
const Blogs = require("../Model/blog");

app.post("/",async (req, res) => {
    let { title, body, userId } = req.body
    let userExist = await Users.findById(userId);
    if(userExist){
        // console.log(title, body);
        // res.send("Got it")
        let newBlog = new Blogs({
            title: title,
            body: body,
            date: Date.now(),
            userId: userId
        })
        userExist.blogs.push(newBlog._id)
        await newBlog.save()
        await userExist.save()

        res.json({
            success: true,
            data: newBlog,
            message: "Blog added successfully"
        })
    }
})


router.get("/", async (req, res)=>{
    let allblog = await Blogs.find();  // returns all data
    res.json({
        success: true,
        data: allblog
    })
})

router.get("/:id", async (req, res)=>{
    let {id} = req.params
    let blog = await Blogs.findOne({_id:id});
    res.json({
        success: true,
        data: blog
    })
})







// delete blog

router.delete("/:blogId", async(req, res)=>{
    let {blogId} = req.params;
    let {userId} = req.body;

    let blogExist = await Blogs.findById(blogId);
    if(!blogId) return res.json({
        success: false,
        message: "Blog does not exist"
    })
    if(blogExist.userId!=userId) return res.json({
        success: false,
        message: "Not allowed to delete"
    })
    await Blogs.findByIdAndDelete(blogId);
    let userExist = await Users.findById(userId);
    let blog = userExist.blogs.filter((id)=> id!=blogId)
    userExist.blogs = blog
    await userExist.save();
    res.json({
        success: true,
        message: "Blog deleted successfully",
        data: userExist
    })
})
module.exports=router;
