// var x;
// if (x == undefined) {
//     console.log("x is : ", x);
// }

// let a = "42";
// let b = 42;
// let c = (true === (1 === "1"));
// console.log(c);

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

// var addi = 3 + "4";
// var plusi = "4" + 3;
// console.log("addi: ", addi);
// console.log("plusi: ", plusi);

// var multi = 3 * "4";
// var divi = 80 / "10";
// var mini = "10" - 5;
// console.log("multi: ", multi);
// console.log("divi: ", divi);
// console.log("mini: ", mini);

// var num = 3 + Number("4");
// console.log("num: ", num);


// function findCarInLot(car) {
//     for (var i = 0; i < lot.length; i++) {
//         if (car === lot[i]) {
//             return i;
//         }
//     }
//     return -1;
// }
// var chevy = {
//     make: "Chevy",
//     model: "Bel Air"
// };
// var taxi = {
//     make: "Webville Motors",
//     model: "Taxi"
// };
// var fiat1 = {
//     make: "Fiat",
//     model: "500"
// };
// var fiat2 = {
//     make: "Fiat",
//     model: "500"
// };
// var lot = [chevy, taxi, fiat1, fiat2];
// var loc1 = findCarInLot(fiat2);
// var loc2 = findCarInLot(taxi);
// var loc3 = findCarInLot(chevy);
// var loc4 = findCarInLot(fiat1);

//    Answer
//    3
//    1
//    0
//    2

// var testThis;
// if (testThis) {
//     console.log(testThis);
// }

// var element = document.getElementById("elementThatDoesntExist");
// if (element) {
//     console.log("elementThatDoesntExist: ",element);
// }

// if (0) {
//     console.log("0 is truthy");
// }
// if ("") {
//     console.log("'' is truthy");
// }
// if (NaN) {
//     console.log("NaN is truthy")
// }

// var test10 = null;
// console.log(typeof test10);

// var text = "YOU SHOULD NEVER SHOUT WHEN TYPING";
// var presentableText = text.toLowerCase();
// if (presentableText.length > 0) {
//     console.log("covert to LOwer case : ", presentableText);
// }


// var name = "Jenny";
// var phone = "867-5309";
// var fact = "This is a prime number";
// var fact2 = "This is a pe"
// var songName = phone + "/" + name;

// var index = phone.indexOf("-");
// if (fact.substring(10, 15) === "prime") {
//     console.log("facte : ", fact);
//     console.log(fact.substring(10, 15));
//     console.log(fact2.substring(8, 11));
// }

// var input = "jenny@wickedlysmart.com";
// for (var i = 0; i < input.length; i++) {
//     if (input.charAt(i) === "@") {
//         console.log("There's an @ sign at index " + i);
//     }
// }

// //Indexmethod
// var phrase = "the cat in the hat";
// var index = phrase.indexOf("cat");
// console.log("there's a cat sitting at index " + index);

// index = phrase.indexOf("the", 5);
// console.log("there's a the sitting at index " + index);

// //Substring method
// var data = "name|phone|address";
// var val = data.substring(5, 10);
// console.log("Substring is " + val);

// //Split method
// var data = "name|phone|address";
// var vals = data.split("|");
// console.log("Split array is ", vals);

//replace
// var data = "Thank you visit again, name";
// var replace = data.replace("name", "John");
// console.log(replace);

// //lastindex of
// var phrase = "the cat in the hat cat";
// var index = phrase.lastIndexOf("t");
// console.log("there's a cat sitting at index " + index);

// //match
// var phrase = "the cat in the hat cat";
// var index = phrase.match("in");
// console.log("there's a cat sitting at index " + index);

// //slice
// var phrase = "the cat in the hat cat";
// var index = phrase.slice("in");
// console.log("slice :" + index);

//larrys code

function validatee(phoneNumber) {
    if (phoneNumber.length !== 8) {
        return false;
    }
    for (var i = 0; i < phoneNumber.length; i++) {
        if (i === 3) {
            if (phoneNumber.charAt(i) !== '-') {
                return false;
            }
        } else if (isNaN(phoneNumber.charAt(i))) {
            return false;
        }
    }
    return true;
}

let phoneNumber = "123-4567";

console.log(validatee(phoneNumber));

//brads code

function validate(phoneNumber) {
    if (phoneNumber.length !== 8) {
        return false;
    }
    var first = phoneNumber.substring(0, 3);
    var second = phoneNumber.substring(4);
    if (phoneNumber.charAt(3) !== "-" || isNaN(first) || isNaN(second)) {
        return false;
    }
    return true;
}

console.log(validate(phoneNumber));

//larry's code with optional dash

function validateLarry(phoneNumber) {
    if (phoneNumber.length > 8 ||
        phoneNumber.length < 7) {
        return false;
    }
    for (var i = 0; i < phoneNumber.length; i++) {
        if (i === 3) {
            if (phoneNumber.length === 8 &&
                phoneNumber.charAt(i) !== '-') {
                return false;
            } else if (phoneNumber.length === 7 &&
                isNaN(phoneNumber.charAt(i))) {
                return false;
            }
        } else if (isNaN(phoneNumber.charAt(i))) {
            return false;
        }
    }
    return true;
}

console.log(validateLarry(phoneNumber));

//barrys's code with optional dash

function validateBarry(phoneNumber) {
    if (phoneNumber.length > 8 ||
        phoneNumber.length < 7) {
        return false;
    }
    var first = phoneNumber.substring(0, 3);
    var second = phoneNumber.substring(phoneNumber.length - 4);
    if (isNaN(first) || isNaN(second)) {
        return false;
    }
    if (phoneNumber.length === 8) {
        return (phoneNumber.charAt(3) === "-");
    }
    return true;
}

console.log(validateBarry(phoneNumber));

//Amy's code
function validateAmy(phoneNumber) {
    return ("Amy : " + phoneNumber.match(/^\d{3}-?\d{4}$/));
}
console.log(validateAmy(phoneNumber));

function Duck(sound) {
    this.sound = sound;
    this.quack = function () { console.log(this.sound); }
}
var toy = new Duck("quack quack");
toy.quack();
console.log(typeof toy);
console.log(toy instanceof Duck);