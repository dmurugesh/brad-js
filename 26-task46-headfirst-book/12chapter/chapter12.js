// var taxi = {
//     make: "Webville Motors",
//     model: "Taxi",
//     year: 1955,
//     color: "yellow",
//     passengers: 4,
//     convertible: false,
//     mileage: 281341,
//     started: false,
//     start: function () { this.started = true; },
//     stop: function () { this.started = false; },
//     drive: function () {
//         console.log("Hello World");
//     }
// };

// var dog = {
//     name: "Fido",
//     breed: "Mixed",
//     weight: 38
// };

// function Dog(name, breed, weight) {
//     this.name = name;
//     this.breed = breed;
//     this.weight = weight;
// }

// var duck = {
//     type: "redheaded",
//     canFly: true
// }

// function Duck(type, canFly) {
//     this.type = type;
//     this.canFly = canFly;
// // }
// var fluffy = new Dog("Fluffy", "Poodle", 30);
// var spot = new Dog("Spot", "Chihuahua", 10);
// var newDuck = new Duck("redheaded", true);
// console.log(newDuck);

// var fido = new Dog("Fido", "Mixed", 38);
// console.log(fido);

// function Dog(name, breed, weight) {
//     this.name = name;
//     this.breed = breed;
//     this.weight = weight;
//     this.bark = function () {
//         if (this.weight > 25) {
//             return (" says Woof!");
//         } else {
//             return (" says Yip!");
//         }
//     };
// }

// var fido = new Dog("Fido", "Mixed", 38);
// var fluffy = new Dog("Fluffy", "Poodle", 30);
// var spot = new Dog("Spot", "Chihuahua", 10);
// var dogs = [fido, fluffy, spot];
// for (var i = 0; i < dogs.length; i++) {
//     var size = "small";
//     if (dogs[i].weight > 10) {
//         size = "large";
//     }
//     console.log("Dog: " + dogs[i].name
//         + " is a " + size
//         + " " + dogs[i].breed + dogs[i].bark());
// }

// function widget(partNo, size) {
//     this.no = partNo;
//     this.breed = size;
// }

// function FormFactor(material, widget) {
//     this.material = material,
//         this.widget = widget,
// }
// var widgetA = new widget(100, "large");
// var widgetB = new widget(101, "small");
// var formFactorA = new FormFactor("plastic", widgetA);
// var formFactorB = new FormFactor("metal", widgetB);


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

// var fido = new Dog("Fido", "Mixed", 38);
// var fluffy = new Dog("Fluffy", "Poodle", 30);
// var spot = new Dog("Spot", "Chihuahua", 10);
// var dogs = [fido, fluffy, spot];
// for (var i = 0; i < dogs.length; i++) {
//  dogs[i].bark();
// }

function Coffee(roast, ounces) {
    this.roast = roast;
    this.ounces = ounces;
    this.getSize = function () {
        if (this.ounces === 8) {
            return "small";
        } else if (this.ounces === 12) {
            return "medium";
        } else if (this.ounces === 16) {
            return "large";
        }
    };
    this.toString = function () {
        return "You've ordered a " + this.getSize() + " "
            + this.roast + " coffee.";
    };
}
var houseBlend = new Coffee("House Blend", 12);
console.log(houseBlend.toString());
var darkRoast = new Coffee("Dark Roast", 16);
console.log(darkRoast.toString());

function Album(title, artist, year) {
    this.title = title;
    this.artist = artist;
    this.year = year;
    this.play = function () {
        // code here
    };
}
var darkside = new Album("Dark Side of the Cheese", "Pink Mouse", 1971);
console.log(darkside.title);