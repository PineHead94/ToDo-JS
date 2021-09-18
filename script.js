const todoInput = document.querySelector('.todo-input')
const todoList = document.querySelector('.todo-list')
const addButton = document.querySelector('.add-btn')
const todo_action = document.querySelector('.todo-list')
const filter = document.querySelector('select')




addButton.addEventListener('click', enterTodo)
todo_action.addEventListener('click', action)
filter.addEventListener('click', filterTodo)


function enterTodo(event){
    event.preventDefault();
    const todo = document.createElement('li')
    todo.classList.add('todo')


    if(todoInput.value!==''){
        todo.innerText = todoInput.value
        todoInput.value = ''    
        const completedButton = document.createElement('button')
        completedButton.innerHTML =`<i class="fas fa-check"></i>`
        completedButton.classList.add('completed-btn')
        completedButton.value = 'completed'
        const deleteButton = document.createElement('button')
        deleteButton.innerHTML = `<i class="fas fa-trash"></i>`
        deleteButton.classList.add('delete-btn')
        todo.appendChild(completedButton)
        todo.appendChild(deleteButton)
        todoList.appendChild(todo)    
    }




}



function action(event){
    console.log(event.target.classList[0])
    if (event.target.classList[0]==='completed-btn'){
        event.target.parentElement.classList.toggle('completed')






    }
    else if(event.target.classList[0]==='delete-btn'){
        event.target.parentElement.classList.add('fall')
        const div = event.target.parentElement
        div.addEventListener('transitionend',()=>{
            event.target.parentElement.remove();
        })

    }





}


function filterTodo(event){

    const todoDiv = document.querySelectorAll('.todo')
    console.log(event.target.value)
    if (event.target.value==='all'){
        todoDiv.forEach(todo => {
            if (todo.classList){
                todo.style.display = 'flex'
            }
        })
    }
    else if (event.target.value==='completed'){
        todoDiv.forEach(todo => {
            if (todo.classList[1]!=='completed'){
                todo.style.display = 'none'
            }else {
                todo.style.display = 'flex'
            }
        })
    }
    else if (event.target.value==='uncompleted'){
        todoDiv.forEach(todo => {
            if (todo.classList[1]==='completed'){
                todo.style.display = 'none'
            }else{
                todo.style.display = 'flex'
            }
        })
    }
}