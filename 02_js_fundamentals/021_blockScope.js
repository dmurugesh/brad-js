// Global Scope
var a = 1;
let b = 2;
const c = 3;


// function test() {
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log('Function Scope: ',a,b,c);
// }

// test();

// if (true) {
//     //Block Scope
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log('IF scope ', a,b,c);
// }

for(const a = 0; a < 10; a++){
    console.log(`loop ${a}`)
}

console.log('Global Scope: ',a,b,c);