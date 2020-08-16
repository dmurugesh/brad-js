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

fido.bark();
fido.run();
fido.wag();
fluffy.bark();
fluffy.run();
fluffy.wag();
spot.bark();
spot.run();
spot.wag();

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
barnaby.sit();
barnaby.sit();
barnaby.sit();
spot.sit();
spot.sit();

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
