//Maps = Key-value pairs - Maps can be use any type as key or value 

const map1 = new Map();

//Set Keys 
const key1 = 'some string',
      key2 = {},
      key3 = function() {};

      //Set Map values by Key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

//get Values by keys 
// console.log(map1.get(key1), map1.get(key2), map1.get(key3) );

//Count values
// console.log(map1.size);

//Iteration maps

//Loop using for .. of to get keys and values 
// for(let [key,value] of map1) {
//     console.log(`${key} = ${value}`)
// }

//Iterates keys only 
// for(let key of map1.keys()) {
//     console.log(key);
// }

//Iterates Values only 
// for(let value of map1.values()) {
//     console.log(value);
// }

//LOOP with forEach

// map1.forEach(function(value, key){
//     console.log(`${key} = ${value}`)
// });


//Convert sets into array 

//Create an array of the key value pairs 
// const keyValArr = Array.from(map1);
// console.log(keyValArr);

// //Create an array of the values
// const valArr = Array.from(map1.values());
// console.log(valArr);

//Create an array of the Key
const keyArr = Array.from(map1.keys());
console.log(keyArr);