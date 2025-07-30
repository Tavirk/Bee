const fs=require("fs");
fs.readFile("../demo.txt","utf-8",function(err,data){
    if(err) return console.log(err);
    console.log(data.toString());
    fs.readFile("../demo2.txt","utf-8",function(err,data2){
        if(err) return console.log(err);
        console.log(data2.toString());
        const combine= data + data2;
        fs.writeFile("../result.txt",combine,function(err){
            if(err) return console.log(err);
            console.log("success");
        })
    })
})
// assignment
// write data in a file using fs module and take input from terminal...
console.log(process.argv)//input in terminal
