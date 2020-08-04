// var x;
// if (x == undefined) {
//     console.log("x is : ", x);
// }

let a = "42";
let b = 42;
let c = (true === (1 === "1"));
console.log(c);

// var test1 = "abcdef";
// var test2 = 123;
// var test3 = true;
// var test4 = {};
// var test5 = [];
// var test6;
// var test7 = { "abcdef": 123 };
// var test8 = ["abcdef", 123];
// function test9() { return "abcdef" };
// console.log("test1: ", typeof test1);
// console.log("test2: ", typeof test2);
// console.log("test3: ", typeof test3);
// console.log("test4: ", typeof test4);
// console.log("test5: ", typeof test5);
// console.log("test6: ", typeof test6);
// console.log("test7: ", typeof test7);
// console.log("test8: ", typeof test8);
// console.log("test9: ", typeof test9);

// var test10 = null;
// console.log(typeof test10);

// // const header = document.getElementById("header");
// // console.log(header);

// var test11 = 0 / 0;
// console.log("test11 :", typeof test11);

// if (99 == "99") {
//     console.log("A number equals a string!");
// } else {
//     console.log("No way a number equals a string");
// }

// var testMe = "99";
// if (testMe == 99) {
//     console.log("testme 99: ", testMe);
// }

//Operators

var addi = 3 + "4";
var plusi = "4" + 3;
console.log("addi: ", addi);
console.log("plusi: ", plusi);

var multi = 3 * "4";
var divi = 80 / "10";
var mini = "10" - 5;
console.log("multi: ", multi);
console.log("divi: ", divi);
console.log("mini: ", mini);

var num = 3 + Number("4");
console.log("num: ", num);


function findCarInLot(car) {
    for (var i = 0; i < lot.length; i++) {
        if (car === lot[i]) {
            return i;
        }
    }
    return -1;
}
var chevy = {
    make: "Chevy",
    model: "Bel Air"
};
var taxi = {
    make: "Webville Motors",
    model: "Taxi"
};
var fiat1 = {
    make: "Fiat",
    model: "500"
};
var fiat2 = {
    make: "Fiat",
    model: "500"
};
var lot = [chevy, taxi, fiat1, fiat2];
var loc1 = findCarInLot(fiat2);
var loc2 = findCarInLot(taxi);
var loc3 = findCarInLot(chevy);
var loc4 = findCarInLot(fiat1);

//    Answer
//    3
//    1
//    0
//    2

var testThis;
if (testThis) {
    console.log(testThis);
}

var element = document.getElementById("elementThatDoesntExist");
if (element) {
    console.log("elementThatDoesntExist: ",element);
}

if (0) {
    console.log("0 is truthy");
}
if ("") {
    console.log("'' is truthy" );
}
if (NaN) {
    console.log("NaN is truthy")
}




