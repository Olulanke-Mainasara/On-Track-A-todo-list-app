let inputBox = document.getElementById("inputBox");
let addTodoBtn = document.getElementById("addTodoBtn");
let todoItems = document.getElementById("todoItems");

addTodoBtn.addEventListener("click", () => {
    if(inputBox.value.trim() != 0) {
        let newTodo = document.createElement("div");
        newTodo.classList.add("Todo-item");

        newTodo.innerHTML = `
            <div class="main">
                <div class="Todo-text">
                    <p> ${inputBox.value} </p>
                </div>
                
                <div class="actionBtns">
                    <i title="Edit to-do item" class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid fa-rotate-left"></i>
                    <i title="Finish to-do item" class="fa-solid fa-check"></i>
                    <i title="Delete to-do item" class="fa-solid fa-trash"></i>
                </div>
            </div>

            <div class="updateToggler">
                <div class="update">
                    <input type="text" id="inputBoxEdit" placeholder="Enter your edited to-do item..." autocomplete="off">
                    <button id="addTodoBtnEdit">Edit</button>
                </div>
            </div>
        `
        todoItems.appendChild(newTodo);
        inputBox.value = "";
    }
    else {
        alert("Please enter a task");
        inputBox.focus();
    }
})


todoItems.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-trash")) {
        e.target.parentElement.parentElement.remove();
    }
})

todoItems.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-check")) {
        e.target.parentElement.parentElement.classList.toggle("completed");
        e.target.parentElement.classList.toggle("done");
    }
})

todoItems.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-rotate-left")) {
        e.target.parentElement.parentElement.classList.toggle("completed");
        e.target.parentElement.classList.toggle("done");
    }
})

todoItems.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-pen-to-square")) {
        e.target.parentElement.parentElement.parentElement.classList.toggle("Update")
    }
})