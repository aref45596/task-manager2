let taskList = document.getElementById('taskList');

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        addTaskToUI(task);
    });
}

function addTask() {
    let input = document.getElementById('taskInput');
    let task = input.value.trim();
    if (task === '') return;

    addTaskToUI(task);

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    input.value = '';
}

function addTaskToUI(task) {
    let li = document.createElement('li');
    li.innerHTML = `${task} <button onclick="deleteTask(this)">❌</button>`;
    taskList.appendChild(li);
}

function deleteTask(button) {
    let li = button.parentElement;
    let task = li.firstChild.textContent.trim();

    li.remove();

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

loadTasks();