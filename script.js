let todos;

const loadTodoList = JSON.parse(localStorage.getItem("strTodoList"));

if (Array.isArray(loadTodoList)) {
    todos = loadTodoList;
}
else {
    todos = [];
}


let todoBox = document.querySelector(".Todo-box");
let inputBox = document.getElementById("inputBox");
let addTodoBtn = document.getElementById("addTodoBtn");


function saveTodos() {
    localStorage.setItem("strTodoList", JSON.stringify(todos));
}


function displayTodos() {
    todoItems.innerHTML = "";

    todos.forEach(todo_Object => {
        const newTodo = document.createElement("div");
        newTodo.classList.add("Todo-item");
        newTodo.id = todo_Object.id

        newTodo.innerHTML = `
            <div class="main ${todo_Object.status}">
                <div class="Todo-text">
                    <input class="itemInput" type="text" value="${todo_Object.text}" placeholder="Make your changes..." readonly>
                </div>
                
                <div class="actionBtns ${todo_Object.status}">
                    <i title="Edit to-do item" id="${todo_Object.id}" class="fa-solid fa-pen-to-square"></i>
                    <i title="Unfinish to-do item" id="${todo_Object.id}" class="fa-solid fa-rotate-left"></i>
                    <i title="Finish to-do item" id="${todo_Object.id}" class="fa-solid fa-check"></i>
                    <i title="Delete to-do item" id="${todo_Object.id}" class="fa-solid fa-trash"></i>
                </div>
            </div>

            <div class="updateToggler">
                <div class="update">
                    <input type="text" class="inputBoxEdit" placeholder="Enter the edit" autocomplete="off">
                    <button class="editTodoBtn">Edit</button>
                </div>
            </div>
        `

        todoItems.appendChild(newTodo);
    })
}


let todoItems = document.createElement("div");
todoItems.classList.add("Todo-items");
todoItems.id = "todoItems";
displayTodos();
todoBox.appendChild(todoItems);


//Activate and Deactivate the add button
inputBox.addEventListener("keyup", () => {
    if (inputBox.value.trim() != 0) {
        addTodoBtn.classList.add("active");
    }
    else {
        addTodoBtn.classList.remove("active");
    }
})


//Add button function
let counter = 0;

addTodoBtn.addEventListener("click", () => {
    if(inputBox.value.trim() != 0) {
        const text = inputBox.value;
        const id = counter;
        const status = "";

        todos.push({
            id: id,
            text: text,
            status: status
        });

        console.log(todos);

        inputBox.value = "";

        addTodoBtn.classList.remove("active")

        displayTodos();

        counter++

        saveTodos();
    }
    else {
        alert("Please enter a task");
        inputBox.focus();
    }
})


//Delete a todo item
todoItems.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-trash")) {
        let target = event.target;
        let idToDelete = target.id;
        console.log(idToDelete);

        todos = todos.filter(todo_Object => {
            if (todo_Object.id == idToDelete) {
                return false
            }
            else {
                return true
            }
        })

        displayTodos();

        saveTodos();

        console.log(todos);
    }
})


//Mark a todo item as done
todoItems.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-check")) {
        let target = event.target;
        let idToMarkDone = target.id;

        todos.forEach(todo_Object => {
            if (todo_Object.id == idToMarkDone) {
                todo_Object.status = "done";
            }
        })

        displayTodos();

        saveTodos();

        console.log(todos);
    }
})


//Undo the todo item completion mark
todoItems.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-rotate-left")) {
        let target = event.target;
        let idToMarkDone = target.id;
        console.log(idToMarkDone);

        todos.forEach(todo_Object => {
            if (todo_Object.id == idToMarkDone) {
                todo_Object.status = "";
            }
        })

        displayTodos();

        saveTodos();

        console.log(todos);
    }
})


//Activating the Edit button
todoItems.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-pen-to-square")) { 
        e.target.parentElement.parentElement.parentElement.classList.toggle("Update");

        let todoItemList = todoItems.querySelectorAll(".Todo-item");
        let target = event.target;
        let idToEdit = target.id;
        
        todoItemList.forEach(item => {
            if (item.id == idToEdit) {
                let todoText = item.querySelector(".Todo-text");
                let itemInput = todoText.querySelector(".itemInput");
                let updateBox = item.querySelector(".update");
                let inputBoxEdit = updateBox.querySelector(".inputBoxEdit");
                let editTodoBtn = updateBox.querySelector(".editTodoBtn");

                editTodoBtn.addEventListener("click", () => {
                    todos.forEach(todo_Object => {
                        if (todo_Object.id == idToEdit) {
                            todo_Object.text = inputBoxEdit.value;
                        }
                    })
            
                    displayTodos();

                    saveTodos();
                    
                    console.log(todos);
                    
                    inputBoxEdit.value = "";
                    item.classList.toggle("Update");
                }, {once: true})
            }
        })  
    }
})