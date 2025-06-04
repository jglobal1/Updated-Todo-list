// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
   
   
    // Get the elements we need
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');


    // Function to add a new task
    function addTask() {
        // Get the text from the input and remove extra spaces
        const taskText = taskInput.value.trim();
        
        // Check if the input is not empty
        if (taskText !== '') {
           
         // Create a new list item for the task
            const taskItem = document.createElement('li');
            taskItem.className = 'task-item';
            
            // Add the task text
            taskItem.textContent = taskText;
            
            // Create a delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.className = 'delete-btn';
            
            // Add click event to delete the task
            deleteBtn.addEventListener('click', function() {
                taskItem.remove();
            });
            
            // Add the delete button to the task item
            taskItem.appendChild(deleteBtn);
            
            // Add the task to the list
            taskList.appendChild(taskItem);
            
            // Clear the input field
            taskInput.value = '';
        }
    }

    // Add task when the green button is clicked
    addTaskBtn.addEventListener('click', addTask);
    
});