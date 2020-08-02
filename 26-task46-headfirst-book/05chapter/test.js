var chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021
   };

document.write(chevy.make);
document.write("<br>");
document.write(chevy.model);

//Excersie
var cadi = { 
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892
};

// Code 
var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2, 
    convertible: false,
    mileage: 88000,
    a: "50",
    b: "6"
}

// fiat.mileage = 10000;
var miles = fiat.mileage;
if (miles > 2000) {
 buyIt();
}

function buyIt() {
let x = (fiat.a - fiat.b);
console.log("value :",x);
}

//Adding property to object 
fiat.needsWashing = true;
console.log(fiat.needsWashing);

//Object magnets 
var dog = {
    name: "Fido",
    weight: 20.2,
    age: 4,
    breed: "mixed",
    activity: "fetch balls"
   };
   var bark;
   if (dog.weight > 20) {
    bark = "WOOF WOOF";
   } else {
    bark = "woof woof";
   }
   var speak = dog.name + " says " + bark + " when he wants to " + dog.activity;
   console.log(speak);