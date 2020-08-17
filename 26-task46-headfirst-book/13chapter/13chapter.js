// function Dog(name, breed, weight) {
//     this.name = name;
//     this.breed = breed;
//     this.weight = weight;
//     this.bark = function () {
//         if (this.weight > 25) {
//             alert(this.name + " says Woof!");
//         } else {
//             alert(this.name + " says Yip!");
//         }
//     };
// }

function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

Dog.prototype.species = "Canine";
Dog.prototype.bark = function () {
    if (this.weight > 25) {
        console.log(this.name + " says Woof!");
    } else {
        console.log(this.name + " says Yip!");
    }
};
Dog.prototype.run = function () {
    console.log("Run!");
};
Dog.prototype.wag = function () {
    console.log("Wag!");
};

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);

spot.bark = function () {
    console.log(this.name + " says WOOF!");
};

// fido.bark();
// fido.run();
// fido.wag();
// fluffy.bark();
// fluffy.run();
// fluffy.wag();
// spot.bark();
// spot.run();
// spot.wag();

var barnaby = new Dog("Barnaby", "Basset Hound", 55);

Dog.prototype.sitting = false;
Dog.prototype.sit = function () {
    if (this.sitting) {
        console.log(this.name + " is already sitting");
    } else {
        this.sitting = true;
        console.log(this.name + " is now sitting");
    }
};
// barnaby.sit();
// barnaby.sit();
// barnaby.sit();
// spot.sit();
// spot.sit();

ShowDog.prototype = new Dog();
ShowDog.prototype.constructor = ShowDog;

// var aDog = new Dog();

function ShowDog(name, breed, weight, handler) {
    Dog.call(this, name, breed, weight);
    this.handler = handler;
}

ShowDog.prototype.league = "Webville";
ShowDog.prototype.stack = function () {
    console.log("Stack");
};
ShowDog.prototype.bait = function () {
    console.log("Bait");
};
ShowDog.prototype.gait = function (kind) {
    console.log(kind + "ing");
};
ShowDog.prototype.groom = function () {
    console.log("Groom");
};
var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");
// console.log(scotty);

// scotty.stack();
// scotty.bark();
// console.log(scotty.league);
// console.log(scotty.species);


var fido = new Dog("Fido", "Mixed", 38);
if (fido instanceof Dog) {
    console.log("Fido is a Dog");
}
if (fido instanceof ShowDog) {
    console.log("Fido is a ShowDog");
}
var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");
if (scotty instanceof Dog) {
    console.log("Scotty is a Dog");
}
if (scotty instanceof ShowDog) {
    console.log("Scotty is a ShowDog");
}
// console.log("Fido constructor is " + fido.constructor);
// console.log("Scotty constructor is " + scotty.constructor);

// console.log(scotty);

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");
var beatrice = new ShowDog("Beatrice", "Pomeranian", 5, "Hamilton");
fido.bark();
fluffy.bark();
spot.bark();
scotty.bark();
beatrice.bark();
scotty.gait("Walk");
beatrice.groom();


function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}
Robot.prototype.toString = function () {
    return this.name + " Robot belonging to " + this.owner;
};
var toy = new Robot("Toy", 2013, "Avary");
console.log(toy.toString());

console.log("Robot is: " + toy);

String.prototype.cliche = function () {
    var cliche = ["lock and load", "touch base", "open the kimono"];
    for (var i = 0; i < cliche.length; i++) {
        var index = this.indexOf(cliche[i]);
        if (index >= 0) {
            return true;
        }
    }
    return false;
};

var sentences = ["I'll send my car around to pick you up.",
    "Let's touch base in the morning and see where we are",
    "We don't want to open the kimono, we just want to inform them."];
for (var i = 0; i < sentences.length; i++) {
    var phrase = sentences[i];
    if (phrase.cliche()) {
        console.log("CLICHE ALERT: " + phrase);
    }
}

String.prototype.palindrome = function() {
    var r = this.split("").reverse().join("");
    return (r === this.valueOf());
}


// //Page 579

// function Robot(name, year, owner) {
//     this.name = name;
//     this.year = year;
//     this.owner = owner;
// }
// Robot.prototype.maker = "ObjectsRUs";
// Robot.prototype.speak = function () {
//     console.log("speak");
// };
// Robot.prototype.makeCoffee = function () {
//     console.log("make coffee")
// };
// Robot.prototype.blinkLights = function () {
//     console.log("blink blink");
// };
// var robby = new Robot("Robby", 1956, "Dr. Morbius");
// var rosie = new Robot("Rosie", 1962, "George Jetson");
// robby.onOffSwitch = true;
// robby.makeCoffee = function () {
//     console.log("Fetching a coffee from Starbucks.")
// };
// rosie.cleanHouse = function () {
//     console.log("Clean the house")
// };

// console.log(robby.name + " was made by " + robby.maker +
//     " in " + robby.year + " and is owned by " + robby.owner);
// robby.makeCoffee();
// robby.blinkLights();

// console.log(rosie.name + " was made by " + rosie.maker +
//     " in " + rosie.year + " and is owned by " + rosie.owner);
// rosie.cleanHouse();


// function Game() {
//     this.level = 0;
// }
// Game.prototype.play = function () {
//     // player plays game here
//     this.level++;
//     console.log("Welcome to level " + this.level);
//     this.unlock();
// }
// Game.prototype.unlock = function () {
//     if (this.level === 42) {
//         Robot.prototype.deployLaser = function () {
//             console.log(this.name + " is blasting you with laser beams.");
//         }
//     }
// }
// function Robot(name, year, owner) {
//     this.name = name;
//     this.year = year;
//     this.owner = owner;
// }
// var game = new Game();
// var robby = new Robot("Robby", 1956, "Dr. Morbius");
// var rosie = new Robot("Rosie", 1962, "George Jetson");
// while (game.level < 42) {
//     game.play();
// }
// robby.deployLaser();
// rosie.deployLaser();
