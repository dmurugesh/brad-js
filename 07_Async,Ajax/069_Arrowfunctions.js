// const sayHello = function() {
//     console.log("Hello");
// }

// const sayHello = () =>  {
//     console.log("Hello");
// }

// arrow fn in one line 
// const sayHello = () => console.log('Hellow');

//  one line return
// const sayHello = () => 'Hello';

//Same as above
// const sayHello = function() {
//     return 'hello';
// }

//return object literals
// const sayHello = () => ( { msg: 'Hello' } );

//Single paramater doesnot needs paranthesis
// const sayHello = name => console.log(`Hello ${name}`);

//Multiple paramaters need paranthesis
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello('brad', 'tranversy');

// Array of users

const users = ['Nathan', 'John', 'William'];

// const nameLengths = users.map(function(name) {
//     return name.length;
// }) ;

//Shorter
// const nameLengths = users.map((name) => {
//     return name.length;
// }) ;

//Shortest
const nameLengths = users.map(name => name.length) ;

console.log(nameLengths);