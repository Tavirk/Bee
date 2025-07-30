const fs=require("fs");
fs.writeFile("../demo.txt","g26 hello",function(err){
    if(err) return console.log(err);
    console.log("success");
})
fs.writeFile("../demo2.txt","backend",function(err){
    if(err) return console.log(err);
    console.log("success");
})