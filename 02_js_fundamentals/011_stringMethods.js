const firstName = 'Ram';
const lastName = 'Raju';
const age = 36;
const str= "Hello here is the world of Joy"
const tags = "web desgin, web development programing";

let val;

val = firstName + lastName;

//Concatenation 
val = firstName + ' ' + lastName;

// Append
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

//Escaping 
val = 'That\'s awsome, I can\'t wait'; 

// Length 
val = firstName.length;

//concat
val = firstName.concat(' ', lastName);

//change case 
val = firstName.toUpperCase();

val = firstName[1];

//indexof()
val = firstName.indexOf('R');

//substring
val = firstName.substring(0, 1);

//slice()
val = firstName.slice(1,2);
val = firstName.slice(-2);

//spilt()
val = str.split(' ');
val = tags.split(',');

//replace()
val = str.replace('Joy' , 'Hell');

//includes()
val = str.includes('Hello')


console.log(val);