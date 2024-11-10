const addButton = document.querySelector(".container-form__button")
const addTaskInput = document.querySelector(".container-form__input")
const taskList = document.querySelector(".conatiner-info")





function addTask() {
    const taskValue = addTaskInput.value
    if (taskValue) {
        createTaskElement(taskValue)
        addTaskInput.value = "";
    } else {
        alert("Please enter your tesk !")
    }
}

function createTaskElement(task) {
    const listItem = document.createElement("div")
    listItem.className = "container-info__card"
    listItem.innerHTML = `
                <i class="fa-regular fa-circle"></i>
                <p>${task}</p>
    
    `
    taskList.appendChild(listItem);
    saveTasks();
}

function saveTasks() {
    let tasks = []
    document.querySelectorAll(".conatiner-info").forEach((item) => {
        console.log(item.textContent.trim())
        tasks.push(item.textContent)
    })

    localStorage.setItem("tasks", JSON.stringify(tasks))
}


function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    // for...of sikli yordamida massiv elementlarini ko'ramiz
    for (let task of tasks) {
        createTaskElement(task); // 'task' bu yerda har bir elementni ifodalaydi
    }
}

loadTasks();


addButton.addEventListener("click", addTask)