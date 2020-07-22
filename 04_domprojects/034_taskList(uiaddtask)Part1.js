// Define UI variable 
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listeners
loadEventListeners();

//load all event Listeners 
function loadEventListeners(){
    //Add task Event
    form.addEventListener('submit', addTask);
}

//Add task 
function addTask(e) {
    if(taskInput.value === '') {
        alert('Add a Task');
    }

    //Create li element 
    const li = document.createElement('li');
    // Add class 
    li.className = 'collection-item';
    // create text node and apend to li 
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element 
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon Html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // append the link to li
    li.appendChild(link);

    //append li to ul 
    taskList.appendChild(li);

    //Clear input 
    taskInput.value = '';

    console.log(li);

    e.preventDefault();
}



 