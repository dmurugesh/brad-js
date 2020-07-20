const li = document.createElement('li');

//Add Class
li.className = 'collection-item';

//Add id
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item');

//create text note and append
li.appendChild(document.createTextNode('Hello World'));

//Create new link element
const link = document.createElement('a');

link.className = 'delete=item secondary-content';

//Add inner html
link.innerHTML = '<i class="fa fa-remove"></i>'

//append li 
li.appendChild(link);



// Append li as child to ul 
document.querySelector('ul.collection').appendChild(li);


console.log(li);