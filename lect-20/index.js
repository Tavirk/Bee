const express = require("express")
const { m1, m2 } = require("./middleware/firstMiddleware")
const {m3}=require("./middleware/pathlevel")
const app=express();
const userRouter=require("./routes/userRoute")
app.use(express.static(__dirname+"/public"))
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(m1)
app.use("/api/users",userRouter)

app.get("/health",m3,(req,res,next)=>{
    console.log("running controller function")
    // next()
    res.json({
        status:"ok",
        message:"server running ok"
    })
    console.log("after response")
})
app.use(m2)
app.get("/home",(req,res,next)=>{
    console.log("running home endpoint")
    return res,json({
        status:"ok",
        message:"server running ok"
    })
})



app.listen(5777,()=>{
    console.log("server started")
})
