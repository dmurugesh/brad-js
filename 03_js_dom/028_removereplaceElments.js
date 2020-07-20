// Replace Element

// Create Element
const newHeading = document.createElement('h1');
//Add id 
newHeading.id = 'task-title';
//Add text node
newHeading.appendChild(document.createTextNode('task-title'));

//Get th old heading
const oldHeading = document.getElementById('task-title');
// PArent
const cardAction = document.querySelector('.card-action');

//Replace
cardAction.replaceChild(newHeading, oldHeading);

//Remove Elements
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//remove List Item
lis[0].remove();

//remove child element
list.removeChild(lis[2]);

//classes & ATTR
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

//Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

//Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');

link.removeAttribute('title');
val = link.hasAttribute('title');


console.log(val);
// console.log(newHeading);