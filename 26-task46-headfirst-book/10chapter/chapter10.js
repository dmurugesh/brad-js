// function quack(num) {
//     for(var i = 0; i < num; i++){
//         console.log("Quack!");
//     }
// }
// quack(3);

// var fly = function(num) {
//     for (var i = 0; i < num; i++) {
//         console.log("Flying!");
//     }
// }
// fly(3);

// function quack(num) {
//     for (var i = 0; i < num; i++) {
//         console.log("Quack!");
//     }
// }

// var fly = function(num) {
//     for (var i = 0; i  < num; i++) {
//         console.log("Flying!");
//     }
// }

// var superFly = fly;
// superFly(3);

// var superQuack = quack; 
// superQuack(3);

// var passengers = [
//     { name: "Jane Doloop", paid: true },
//     { name: "Dr. Evel", paid: true },
//     { name: "Sue Property", paid: false },
//     { name: "John Funcall", paid: true }
// ];

// function checkPaid(passengers) {
//     for (var i = 0; i < passengers.length; i++) {
//         if (!passengers[i].paid) {
//             return false;
//         }
//     }
//     return true;
// }

// function checkNoFly(passengers) {
//     for (var i = 0; i < passengers.length; i++) {
//         if (onNoFlyList(passengers[i].name)) {
//             return false;
//         }
//     }
//     return true;
// }

// function printPassengers(passengers) {
//     for (var i = 0; i < passengers.length; i++) {
//         console.log(passengers[i].name);
//         return false;
//     }
//     return true;
// }

// console.log(checkPaid(passengers));

// function sayIt(translator) {
//     var phrase = translator("Goodbye");
//     alert(phrase);
// }
// function hawaiianTranslator(word) {
//     if (word === "Hello") return "Aloha";
//     if (word === "Goodbye") return "Aloha2";
// }
// sayIt(hawaiianTranslator);

// function processPassengers(passengers, testFunction) {
//     for (var i = 0; i < passengers.length; i++) {
//         if (testFunction(passengers[i])) {
//             return false;
//         }
//     }
//     return true;
// }

// function checkNoFlyList(passenger) {
//     return (passenger.name === "Dr. Evel");
// }
// function checkNotPaid(passenger) {
//     return (!passenger.paid);
// }

// var allCanFly = processPassengers(passengers, checkNoFlyList);
// if (!allCanFly) {
//     console.log("The plane can't take off: we have a passenger on the no-fly-list.");
// }
// var allPaid = processPassengers(passengers, checkNotPaid);
// if (!allPaid) {
//     console.log("The plane can't take off: not everyone has paid.");
// }



// function printPassenger(passenger) {
//     var passName = passenger.name;
//     if (passenger.paid === true) {
//         passName = passName + " has paid";
//     } else {
//         passName = passName + " has not paid";
//     }
//     console.log(passName);
//     // return false;
// }

// processPassengers(passengers, printPassenger);


//return a function from function 

var passengers = [
    { name: "Jane Doloop", paid: true, ticket: "coach" },
    { name: "Dr. Evel", paid: true, ticket: "firstclass" },
    { name: "Sue Property", paid: false, ticket: "firstclass" },
    { name: "John Funcall", paid: true, ticket: "premium" }
];

function serveCustomer(passenger) {
    var getDrinkOrderFunction =  createDrinkOrder(passenger);
    var getDinnerOrderFunction = createDinnerOrder(passenger);
    getDrinkOrderFunction();
    getDinnerOrderFunction();
    //get dinner order
    // getDrinkOrderFunction();
    // getDrinkOrderFunction();
    // //show movie
    // getDrinkOrderFunction();
    //pick up trash
}

function createDrinkOrder(passenger) {
    var orderFunction;
    console.log(passenger.ticket);
    if (passenger.ticket === "firstclass") {
        orderFunction = function () {
            alert("Would you like a cocktail or wine?");
        }
    } else if (passenger.ticket === "premium") {
        orderFunction = function() {
            alert("Would you like wine, cola or water?");
        } 
    } else {
        orderFunction = function () {
            alert("Your choice is cola or water?");
        };
    }
    return orderFunction;
}

function createDinnerOrder(passenger) {
    var orderFunction;
    if (passenger.ticket === "firstclass") {
        orderFunction = function() {
            alert("Would you like chicken or pasta?");
        };
    } else if (passenger.ticket === "premium") {
        orderFunction = function() {
            alert("Would you like a snack box or cheese plate?");
        };
    } else {
        orderFunction = function() {
            alert("Would you like peanuts or pretzels?");
        };
    }
    return orderFunction;
}


function servePassangers(passengers){
    for (var i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);
    }
}

servePassangers(passengers);

// function addN(n) {
//     var adder = function(x) {
//                    return n + x;
//                 };
//     return adder;
// }
// var add2 = addN(4);
// console.log(add2(10));
// console.log(add2(100));
