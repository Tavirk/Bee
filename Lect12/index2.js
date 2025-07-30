let todos=[
    {
        id:12323,
        title:"study at 9"
    },
    {
        id:2345,
        title:"study at 8"
    }
]
let todo = {
    id: 234234,
    title: 'study at 9pm',
}

let todoContainer = document.querySelector('.todocontainer');
function addTodo(todo){
    let li = document.createElement('li');
    li.innerHTML = `   <div>
                <input type="checkbox" name="" id="">
                <h1>${todo.title}</h1>
                <div>
                    <button>❌</button>
                    <button>✏️</button>
                </div>
            </div>`
    todoContainer.appendChild(li);
}
function showAlltodos(todos){
    todo.forEach(todo=>{
        addTodo(todo)
    });
}
showAlltodos(todos)