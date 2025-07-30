const express =require('express')
const app = express()
const fs=require('fs')
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("server is running ");
});
app.post("/user",(req,res)=>{
    // const{name,age}=req.body;
    // res.json({
    //     name:name,
    //     age:age
    let alluser=[];
    let name =req.body.name;
    let password=req.body.password;
    let user={user,password};
    fs.readfile("userdata.json","utf-8",function(err,data){
        if(err) return res.json({
            error:err
        })
        if(data && data.length>0){
            alluser =JSON.parse(data);
        }
    })
    res.josn({
        name:name,
        password:password
    })
    });
});

app.listen(3000,function(){
    console.log("Server Started")
})
