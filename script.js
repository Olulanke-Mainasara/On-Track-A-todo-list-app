let inputBox = document.getElementById("inputBox");
let addTodoBtn = document.getElementById("addTodoBtn");
let todoItems = document.getElementById("todoItems");
let todoText = document.querySelector(".Todo-text");
let itemInput = document.querySelector(".itemInput")


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
addTodoBtn.addEventListener("click", () => {
    if(inputBox.value.trim() != 0) {
        let newTodo = document.createElement("div");
        newTodo.classList.add("Todo-item");

        newTodo.innerHTML = `
            <div class="main">
                <div class="Todo-text">
                    <input class="itemInput" type="text" placeholder="${inputBox.value}"</p>
                </div>
                
                <div class="actionBtns">
                    <i title="Edit to-do item" class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid fa-rotate-left"></i>
                    <i title="Finish to-do item" class="fa-solid fa-check"></i>
                    <i title="Delete to-do item" class="fa-solid fa-trash"></i>
                </div>
            </div>
        `
        todoItems.appendChild(newTodo);
        inputBox.value = "";

        addTodoBtn.classList.remove("active")
    }
    else {
        alert("Please enter a task");
        inputBox.focus();
    }
})


//Delete a todo item
todoItems.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-trash")) {
        e.target.parentElement.parentElement.parentElement.remove();
    }
})


//Mark a todo item as done
todoItems.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-check")) {
        e.target.parentElement.parentElement.classList.toggle("completed");
        e.target.parentElement.classList.toggle("done");
    }
})


//Undo the todo item completion mark
todoItems.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-rotate-left")) {
        e.target.parentElement.parentElement.classList.toggle("completed");
        e.target.parentElement.classList.toggle("done");
    }
})
