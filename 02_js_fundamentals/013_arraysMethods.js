// Create some arrays 
const numbers = [43,56,33,23,44,36,5];
const number2 = new Array(22,45,33,76,54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;
// Get array Length
val = numbers.length;
// Check if is array 
val = Array.isArray(numbers);
// Get single value 
val = numbers[2];
val = numbers[0];
//Insert into array
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(36);

//MUTATING ARRAYS
// // Addon to end
// numbers.push(250);
// // Add on to front
// numbers.unshift(120);
// // Take off from end 
// numbers.pop();
// // Take off from front
// numbers.shift();
// // splice values
// numbers.splice(1, 3)
// // Reverse 
// numbers.reverse();

// Concatate strings 
val = numbers.concat(number2);

// sorting arrays
val = fruit.sort();
val = numbers.sort();

// use the "compare function"
val = numbers.sort(function(x,y){
    return x-y;
});

// reverse sort 
val = numbers.sort(function(x,y){
    return y -x;
});

// Find 
function under50(num){
    return num > 50; 
}
val = numbers.find(under50);

console.log(numbers);
console.log(val);