// //Sample Function
// // function handler() { alert("Yeah, that page loaded!"); }
// // window.onload = handler;

// // //annonyms function
// // window.onload = function () { alert("Yeah, that page loaded!"); };


// window.onload = function() {
//     var button = document.getElementById("bake");
//     button.onclick = function() {
//         console.log("Time to bake the cookies.");
//         cookies.bake(2500);
//     };
// };


// var cookies = {
//     instructions: "Preheat oven to 350...",
//     bake: function (time) {
//         console.log("Baking the cookies.");
//         setTimeout(done, time);
//     }
// };


// function done() {
//     alert("Cookies are ready, take them out to cool.");
//     console.log("Cooling the cookies.");
//     setTimeout(function () {
//         alert("Cookies are cool, time to eat!");
//     }, 1000);
// }

// // //Normal fn
// // function cookieAlarm() {
// //     alert("Time to take the cookies out of the oven");
// // };
// // setTimeout(cookieAlarm, 6000);

// //annonyms fn 
// setTimeout(function() {
//     alert("Time to take the cookies out of the oven");
// }, 6000);

// var migrating = true;

// var fly = function (num) {
//     for (var i = 0; i < num; i++) {
//         console.log("Flying!");
//     }
// };
// function quack(num) {
//     for (var i = 0; i < num; i++) {
//         console.log("Quack!");
//     }
// }
// if (migrating) {
//     quack(4);
//     fly(4);
// }

var migrating = true;
var fly = function (num) {
    var sound = "Flying";
    function wingFlapper() {
        console.log(sound);
    }
    for (var i = 0; i < num; i++) {
        wingFlapper();
    }
};
function quack(num) {
    var sound = "Quack";
    var quacker = function () {
        console.log(sound);
    };
    for (var i = 0; i < num; i++) {
        quacker();
    }
}
if (migrating) {
    quack(4);
    fly(4);
}

// var justAVar = "Oh, don't you worry about it, I'm GLOBAL";
// function whereAreYou() {
//     var justAVar = "Just an every day LOCAL";
//     function inner() {
//         return justAVar;
//     }
//     return inner();
// }
// var result = whereAreYou();
// console.log(result);

// var justAVar = "Oh, don't you worry about it, I'm GLOBAL";
// function whereAreYou() {
//     var justAVar = "Just an every day LOCAL";
//     function inner() {
//         return justAVar;
//     }
//     return inner;
// }
// var innerFunction = whereAreYou();
// var result = innerFunction();
// console.log(result);

// function makeCounter() {
//     var count = 0;
//     function counter() {
//     count = count + 1;
//     return count;
//     }
//     return counter;
//    }

//    var doCount = makeCounter();
//    console.log(doCount());
//    console.log(doCount());
//    console.log(doCount());


function makeCounter() {
    var count = 0;
    return function () {
        count++;
        return count;
    }
}
var counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());

var justAVar = "Oh, don't you worry about it, I'm GLOBAL";
function whereAreYou() {
    var justAVar = "Just an every day LOCAL";
    function inner() {
        return justAVar;
    }
    return inner;
}
var innerFunction = whereAreYou();
var result = innerFunction();
console.log(result);


// function justSayin(phrase) {
//     var ending = "";
//     if (beingFunny) {
//         ending = " -- I'm just sayin!";
//     } else if (notSoMuch) {
//         ending = " -- Not so much.";
//     }
//     alert(phrase + ending);
// }

// console.log(justSayin("Hello"));

function multN(n) {
    return function multBy(m) {
        console.log(m);
        return n * m;

    };
}
var multBy3 = multN(3);
console.log("Multiplying 2: " + multBy3(2));
console.log("Multiplying 3: " + multBy3(3));

function makeCounter() {
    var count = 0;
    function counter() {
        count = count + 1;
        return count;
    }
    return counter;
}
var doCount = makeCounter();
console.log(doCount());
console.log(doCount());
console.log(doCount());
