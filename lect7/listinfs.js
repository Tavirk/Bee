let users=[{
    id:1,
    name:"sarbjot kang",
    age:20,
},
    {
        id:2,
        name:"shubham",
        age:19
    }]
const fs=require("fs");
fs.writeFile("../users2.txt",JSON.stringify(users),function (err){
    if(err) return console.log(err);
    console.log("user written");
})