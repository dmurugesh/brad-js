// String 

const name1 = 'Jeff';
const name2 = new String('Jeff');

// name2.foo = 'bar';
// console.log(name1);

console.log(typeof name2);

if(name2 == 'Jeff'){
    console.log('Yes');
} else {
    console.log('No');
}

//Number 
const num1 = 5;
const num2 = new Number(5);

//Boolean
const bool1 = true;
const bool2 = new Boolean(false);

// Function

const getSum1 = function(x, y) {
    return x + y;
}

const getSum2 = new Function('x','y', 'return 1 + 5');

//Object
const john1 = {nam: "John"};
const john2 = new Object({name: "Johnne"});

//Arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

//Regular Expression
const re1 = /\w+/;
const re2 = new RegExp('\\w+');

console.log(re2);
