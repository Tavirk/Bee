// function buyproduct(product_Name,cb){
//     setTimeout(()=>{
//         console.log("all the I/O is completed and order details");
//         cb();
//     },0)
// }
// buyproduct("Iphone 16",function(){
//     console.log("product is purchased")
// })
let product = [{
    name:"samsung",
    amount:70000,
    quantity:10
},
    {
        name:"Iphone 16",
        amount:100000,
        quantity:0
    }]
// function buyproduct(product_Name) {
//      let p=new Promise((resolve, reject) => {
//         const isproduct = product.filter((p) => p.name === product_Name)[0];
//
//         if (!isproduct) {
//             reject("Product is not available");
//         } else {
//             resolve(isproduct.amount);
//         }
//     })
//     p.then((data)=>{
//         console.log(data)
//     })
//     p.catch((err)=>{
//         console.log(err)
//     })
// }
function buyproduct(product_Name,cb){
    return new Promise((resolve,reject)=>{


    let isproduct=product.filter((p)=> p.name==product_Name)[0];
    if(!isproduct){
        return reject("product is not available",null)
    }
    // cb(null,isproduct.amount)
        resolve(isproduct.amount)
    })

}
let availamount=120000
function deductbankamount(amount,cb){
    return new Promise((resolve,reject)=>{
        if(amount>availamount){
            return reject("bank balance is low",null)
        }else{
            availamount-=amount;
            resolve("amount deducted");
            // cb(null,"amount deducted")
            // console.log("remaining balance",availamount)
           // cb(null,"amount deducted");
        }
    })


}
// buyproduct("Iphone 16",function(err,amount){
//     if(err) return console.log(err);
//     console.log(amount);
//     deductbankamount(amount,function(err,message){
//         if(err) return console.log(err)
//             console.log(message);
//     })
//     // console.log("product is purchased")
// })
// const fs= require("fs")
// fs.read
buyproduct("Iphone 16").then((amount)=>{
    console.log(amount)
    return deductbankamount(amount)
})
    .then((amount)=>{
        console.log(amount)
    })
    .catch((err)=>{
        console.log(err)
    })

let a=10;
let b=15;
let c=a+b;
function sum(a,b){
    return a+b;

}
