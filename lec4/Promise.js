let p= new Promise((resolve,reject)=>{
    resolve("wada pura kiya");
})
// console.log(p);
p.then((data)=>{
    console.log(data)
})
p.catch((err)=>{
console.log(err)
})