const fs=require("fs");
function read(filepath){
    return new Promise((resolve,reject)=>{
        fs.readFile(filepath,"utf-8",function(err,data){
            if(err) return reject(err)
            let users = JSON.parse(data);
            resolve(users)
        })
    })
}
function write(filepath){
    return new promise((resolve,reject)=>{
        fs.writeFile(filepath,function(err,data){
            if(err) return reject(err)
            console.log(success)
        })
    })
}
module.exports.read=read;