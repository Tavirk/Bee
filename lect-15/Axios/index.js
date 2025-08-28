console.log(Axios)
function getcomment(URL){
    axion.get(URL).then((data)=>{
        console.log(data)
    })
        .catch(err=>console.log(err))
}
getcomment("https://jsonplaceholder.typicode.com/comments")