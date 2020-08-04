var x;
if (x == undefined) {
    console.log("x is : ", x);
}

let a = "50";
let b = true;
let c = typeof a;
console.log(c);

var test1 = "abcdef";
var test2 = 123;
var test3 = true;
var test4 = {};
var test5 = [];
var test6;
var test7 = { "abcdef": 123 };
var test8 = ["abcdef", 123];
function test9() { return "abcdef" };
console.log("test1: ", typeof test1);
console.log("test2: ", typeof test2);
console.log("test3: ", typeof test3);
console.log("test4: ", typeof test4);
console.log("test5: ", typeof test5);
console.log("test6: ", typeof test6);
console.log("test7: ", typeof test7);
console.log("test8: ", typeof test8);
console.log("test9: ", typeof test9);

var test10 = null;
console.log(typeof test10);

// const header = document.getElementById("header");
// console.log(header);

var test11 = 0 / 0;
console.log("test11 :", typeof test11);

if (99 == "99") {
    console.log("A number equals a string!");
} else {
    console.log("No way a number equals a string");
}

var testMe = "99";
if (testMe == 99) {
    console.log("testme 99: ", testMe);
}






