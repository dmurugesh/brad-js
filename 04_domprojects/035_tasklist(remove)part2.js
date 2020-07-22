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
    // Remove task EVebt
    taskList.addEventListener('click', removeTask);
    // Clear task event
    clearBtn.addEventListener('click', clearTasks);
    //Filter task Events
    filter.addEventListener('keyup', filterTask)
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

//Remove Task

function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
       if(confirm('Are you Sure?')){

        e.target.parentElement.parentElement.remove();
        }
    }
}

// Clear Tasks
function clearTasks(e){
    // taskList.innerHTML = '';

     //Faster
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}
 
//Filter task
function filterTask(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}