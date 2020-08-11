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

var passengers = [
    { name: "Jane Doloop", paid: true },
    { name: "Dr. Evel", paid: true },
    { name: "Sue Property", paid: false },
    { name: "John Funcall", paid: true }
];

function checkPaid(passengers) {
    for (var i = 0; i < passengers.length; i++) {
        if (!passengers[i].paid) {
            return false;
        }
    }
    return true;
}

function checkNoFly(passengers) {
    for (var i = 0; i < passengers.length; i++) {
        if (onNoFlyList(passengers[i].name)) {
            return false;
        }
    }
    return true;
}

function printPassengers(passengers) {
    for (var i = 0; i < passengers.length; i++) {
        console.log(passengers[i].name);
        return false;
    }
    return true;
}

console.log(checkPaid(passengers));