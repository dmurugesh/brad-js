var taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341,
    started: false,
    start: function () { this.started = true; },
    stop: function () { this.started = false; },
    drive: function () {
        console.log("Hello World");
    }
};

var dog = {
    name: "Fido",
    breed: "Mixed",
    weight: 38
};

function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

var duck = {
    type: "redheaded",
    canFly: true
}

function Duck(type, canFly) {
    this.type = type;
    this.canFly = canFly;
}
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
var newDuck = new Duck("redheaded", true);
console.log(newDuck);

var fido = new Dog("Fido", "Mixed", 38);
console.log(fido);

function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
var dogs = [fido, fluffy, spot];
for (var i = 0; i < dogs.length; i++) {
    var size = "small";
    if (dogs[i].weight > 10) {
        size = "large";
    }
    console.log("Dog: " + dogs[i].name
        + " is a " + size
        + " " + dogs[i].breed);
}


function widget(partNo, size) {
    this.no = partNo;
    this.breed = size;
}

function FormFactor(material, widget) {
    this.material = material,
    this.widget = widget,
}
var widgetA = new widget(100, "large");
var widgetB = new widget(101, "small");
var formFactorA = new FormFactor("plastic", widgetA);
var formFactorB = new FormFactor("metal", widgetB);