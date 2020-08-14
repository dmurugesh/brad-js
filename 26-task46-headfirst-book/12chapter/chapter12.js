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


function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.bark = function () {
        if (this.weight > 25) {
            alert(this.name + " says Woof!");
        } else {
            alert(this.name + " says Yip!");
        }
    };
}

// var fido = new Dog("Fido", "Mixed", 38);
// var fluffy = new Dog("Fluffy", "Poodle", 30);
// var spot = new Dog("Spot", "Chihuahua", 10);
// var dogs = [fido, fluffy, spot];
// for (var i = 0; i < dogs.length; i++) {
//  dogs[i].bark();
// }

// function Coffee(roast, ounces) {
//     this.roast = roast;
//     this.ounces = ounces;
//     this.getSize = function () {
//         if (this.ounces === 8) {
//             return "small";
//         } else if (this.ounces === 12) {
//             return "medium";
//         } else if (this.ounces === 16) {
//             return "large";
//         }
//     };
//     this.toString = function () {
//         return "You've ordered a " + this.getSize() + " "
//             + this.roast + " coffee.";
//     };
// }
// var houseBlend = new Coffee("House Blend", 12);
// console.log(houseBlend.toString());
// var darkRoast = new Coffee("Dark Roast", 16);
// console.log(darkRoast.toString());

// function Album(title, artist, year) {
//     this.title = title;
//     this.artist = artist;
//     this.year = year;
//     // this.play = function () {
//     //     // code here
//     // };
// }
// // var darkside = new Album("Dark Side of the Cheese", "Pink Mouse", 1971);
// // console.log(darkside.title);
// var darkside = new Album("Dark Side of the Cheese","", 1971);
// // console.log(darkside);


// function Car(make, model, year, color, passegers, mileage, started) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.color = color;
//     this.passegers = passegers;
//     this.mileage = mileage;
//     this.started = started;

//     this.start = function () {
//         this.started = true;
//     };
//     this.stop = function () {
//         this.started = false;
//     },
//         this.drive = function () {
//             if (this.started) {
//                 console.log(this.make + " " +
//                     this.model + " goes zoom zoom!");
//             } else {
//                 console.log("Start the engine first.");
//             }
//         }
// }

// var chevy = new Car("Chevy", "Bel Air", 1957, "red", 2, false, 1021);
// var cadi = new Car("GM", "Cadillac", 1955, "tan", 5, false, 12892);
// var taxi = new Car("Webville Motors", "Taxi", 1955, "yellow", 4, false, 281341);
// var fiat = new Car("Fiat", "500", 1957, "Medium Blue", 2, false, 88000);
// var testCar = new Car("Webville Motors", "Test Car", 2014, "marine", 2, true, 21);

// let cars = [chevy, cadi, taxi, fiat, testCar];

// for (let i = 0; i < cars.length; i++) {
//     cars[i].start();
//     cars[i].drive();
//     cars[i].drive();
//     cars[i].stop();
// }

// var cadi = new Car("GM", "Cadillac", 1955, "tan", 5, false, 12892);

// var cadiParams = {
//     make: "GM",
//     model: "Cadillac",
//     year: 1955,
//     color: "tan",
//     passengers: 5,
//     convertible: false,
//     mileage: 12892
// };



// var cadi = new Car("GM", "Cadillac", 1955, "tan", 5, false, 12892);

var cadiParams = {
    make: "GM",
    model: "",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892
};

function Car(params) {
    this.make = params.make;
    this.model = params.model;
    this.year = params.year;
    this.color = params.color;
    this.passengers = params.passengers;
    this.convertible = params.convertible;
    this.mileage = params.mileage;
    this.started = false;
    this.start = function () {
        this.started = true;
    };
    this.stop = function () {
        this.started = false;
    };
    this.drive = function () {
        if (this.started) {
            alert("Zoom zoom!");
        } else {
            alert("You need to start the engine first.");
        }
    };
}

var cadi = new Car(cadiParams);

if (cadi instanceof Car) {
    console.log("Congrats, it's a Car!");
};

// var cadi = new Car(cadiParams);
// console.log(cadi);
// cadi.start();
// cadi.drive();
// cadi.drive();
// cadi.stop();
// var limoParams = {
//     make: "Webville Motors",
//     model: "limo",
//     year: 1983,
//     color: "black",
//     passengers: 12,
//     convertible: true,
//     mileage: 21120
// };
// var limo = new Car(limoParams);
// var limoDog = new Dog("Rhapsody In Blue", "Poodle", 40);
// console.log(limo.make + " " + limo.model + " is a " + typeof limo);
// console.log(limoDog.name + " is a " + typeof limoDog);

var limoParams = {
    make: "Webville Motors",
    model: "limo",
    year: 1983,
    color: "black",
    passengers: 12,
    convertible: true,
    mileage: 21120
};
var limo = new Car(limoParams);
var limoDog = new Dog("Rhapsody In Blue", "Poodle", 40);
console.log(limo.make + " " + limo.model + " is a " + typeof limo);
console.log(limoDog.name + " is a " + typeof limoDog);

