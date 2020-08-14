function Album(title, artist, year) {
    this.title = title;
    this.artist = artist;
    this.year = year;
}

var firstElement = new Album("Make Hay while", "The sunshines", 1971);
console.log("firstElement :", firstElement);

var darkside = new Album("Dark Side of the Cheese", "", 1971);
console.log("Darakside :", darkside);


function dogCatcher(obj) {
    if (obj instanceof Dog){
        return true;
    } else {
        return false;
    }
}

function Cat(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}
var meow = new Cat("Meow", "Siamese", 10);
var whiskers = new Cat("Whiskers", "Mixed", 12);
var fido = { name: "Fido", breed: "Mixed", weight: 38 };
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
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
var dogs = [meow, whiskers, fido, fluffy, spot];
for (var i = 0; i < dogs.length; i++) {
    if (dogCatcher(dogs[i])) {
        console.log(dogs[i].name + " is a dog!");
    }
}

var now = new Date();
var dateString = now.toString();
var theYear = now.getFullYear();
var theDayOfWeek = now.getDay();
var birthday = new Date("May 1, 1983 08:03 pm");

console.log(now);
console.log(dateString);
console.log(theYear);
console.log(theDayOfWeek);
console.log(birthday);

var emptyArray = new Array();
emptyArray[0] = 99;
console.log(emptyArray);

var oddNumbers = new Array(3);
oddNumbers[0] = 1;
oddNumbers[1] = 3;
oddNumbers[2] = 5;
oddNumbers.reverse();
console.log(oddNumbers);

var aString = oddNumbers.join(" ");
console.log(aString);

var areAllOdd = oddNumbers.every(function(x) {
    return ((x % 2) !== 0);
   });
console.log(areAllOdd);

var items = new Array("a", "b", "c");
var items = ["a", "b", "c"];
console.log(items);

var taxi = new CarPrototype();
taxi.model = "Delorean Remake";
taxi.color = "silver";
taxi.currentTime = new Date();
taxi.fluxCapacitor = {type: "Mr. Fusion"};
taxi.timeTravel = function(date) {...};
