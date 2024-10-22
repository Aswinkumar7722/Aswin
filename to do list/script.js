document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskList = document.getElementById('taskList');
        const taskElement = document.createElement('li');
        taskElement.classList.add('task');

        taskElement.innerHTML = `
            ${taskText}
            <button class="deleteButton">Delete</button>
        `;

        taskList.appendChild(taskElement);
        taskInput.value = ''; // Clear the input

        // Add event listener for the delete button
        const deleteButton = taskElement.querySelector('.deleteButton');
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(taskElement);
        });
    } else {
        alert('Please enter a task.');
    }
});
