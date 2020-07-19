// if(something){
//     do something
// } else {
//     do something else
// }

const id = 100;

// //Equal TO
// if (id == 101){
//     console.log('Correct');
// } else {
//     console.log('Incorrect');
// }

// //Not Equal to 
// if (id != 101) {
//     console.log('Correct');
// } else {
//     console.log('Incorrect');
// }

// // Equal to Value & type
// if(id === 100) {
//     console.log('Correct');
// } else {
//     console.log('Incorrect');
// }

// // Equal to value & Type
// if(id !== 100) {
//     console.log('Correct');
// } else {
//     console.log('Incorrect');
// }

// Test if undefined
// if(typeof id !== 'undefined'){
//     console.log(`The ID is ${id}`);
// } else {
//     console.log('No ID');
// }

//Greater or less than
// if (id <= 100) {
//     console.log('correct');
// } else {
//     console.log('incorrect');
// }

// IF ELSE
const color = 'yellow';

// if(color === 'red'){
//     console.log('color is red');
// } else if(color === 'blue'){
//     console.log('color is blue')
// } else {
//     console.log('color is not red or blue');
// }

//  LOGICAL OPERATORS

const name = 'Steve';
const age =20;

// AND &&
// if(age > 0 && age < 12){
//     console.log(`${name} is a child`);
// } else if(age >= 13 && age <= 19){
//     console.log(`${name} is a teenager`);
// } else {
//     console.log(`${name} is an adult`)
// }

// OR ||
if(age < 16 || age > 65){
    console.log(`${name} can not run in race`);
} else {
    console.log(`${name} is regiestered for the race`)
}

// Ternary Operator
 console.log(id === 100 ? 'Correct' : 'incorrect');

 //Without Braces 
 if(id === 100)
 console.log('correct');
 else 
 console.log('incorrect');