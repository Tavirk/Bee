const fs=require("fs");
fs.readFile("../users.txt","utf-8",function(err,data){
    if(err) return console.log(err);
    // console.log(data[0]);
    let users1=JSON.parse(data);
    console.log(users1)
    fs.readFile("../users2.txt","utf-8",function(err,data) {
        if (err) return console.log(err);
        // console.log(data[0]);
        let users2 = JSON.parse(data);
        console.log(users2)
        const combine= users1.concat(users2);
        fs.writeFile("../result2.txt",JSON.stringify(combine),function(err){
            if(err) return console.log(err);
            console.log("success");
            // let result2 = JSON.parse(data);
            // console.log(result2)
            // fs.readFile("../result2","utf-8",function(err,data){
            //     if(err) console.log(err)
            //     let result3=JSON.parse(data);
            //     console.log(result3);
            // })
        })
    })

})
// assignmen=
// write data in a file using fs module and take input from terminal...
// console.log(process.argv)//input in terminal
//
async function readFile(filepath){
    let data=await read(filepath)
    console.log(data)
}
readFile("../users.txt")
