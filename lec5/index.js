let users=[
    {
        id:1,
        name:"nitesh",
        age:24,
    },
    {
        id:2,
        name:"ritika",
        age:16
    }
]
function isAllowed(id){
    return new promise((resolve,reject)=>{
        let person = users.filter((u)=>{
            return u.id==id
        })[0]
        console.log(person);
        if(!user)return reject("no user found")
        if(user.age<18)return reject("not eligible to vote")
        return resolve("eligible for vote")
    })


    // if (person.age > 18) {
    //     console.log(" above 18");
    // } else {
    //     console.log(" 18 or younger");
    // }
    isAllowed(1).then((data)=>{
        console.log(data)
    })
        .catch((err)=>{
            console.log(err)
        })

}