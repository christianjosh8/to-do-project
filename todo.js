document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    // Add task
    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="complete">Complete</button>
                <button class="delete">Delete</button>
            `;
            taskList.appendChild(li);
            taskInput.value = '';
        }
    });

    // Handle task list actions
    taskList.addEventListener('click', function(e) {
        if (e.target.classList.contains('complete')) {
            const li = e.target.parentElement;
            li.classList.toggle('completed');
        } else if (e.target.classList.contains('delete')) {
            const li = e.target.parentElement;
            li.remove();
        }
    });
});
