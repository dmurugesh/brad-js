// var chevy = {
//     make: "Chevy",
//     model: "Bel Air",
//     year: 1957,
//     color: "red",
//     passengers: 2,
//     convertible: false,
//     mileage: 1021
//    };

// document.write(chevy.make);
// document.write("<br>");
// document.write(chevy.model);

// //Excersie
// var cadi = { 
//     make: "GM",
//     model: "Cadillac",
//     year: 1955,
//     color: "tan",
//     passengers: 5,
//     convertible: false,
//     mileage: 12892
// };

// // Code 
// var fiat = {
//     make: "Fiat",
//     model: "500",
//     year: 1957,
//     color: "Medium Blue",
//     passengers: 2, 
//     convertible: false,
//     mileage: 88000,
//     a: "50",
//     b: "6"
// }

// // fiat.mileage = 10000;
// var miles = fiat.mileage;
// if (miles > 2000) {
//  buyIt();
// }

// function buyIt() {
// let x = (fiat.a - fiat.b);
// console.log("value :",x);
// }

// //Adding property to object 
// fiat.needsWashing = true;
// console.log(fiat.needsWashing);

// //Object magnets 
// var dog = {
//     name: "Fido",
//     weight: 20.2,
//     age: 4,
//     breed: "mixed",
//     activity: "fetch balls"
//    };
//    var bark;
//    if (dog.weight > 20) {
//     bark = "WOOF WOOF";
//    } else {
//     bark = "woof woof";
//    }
//    var speak = dog.name + " says " + bark + " when he wants to " + dog.activity;
//    console.log(speak);

//delete item 
//    delete fido.dogYears;


// var taxi = {
//         make: "Webville Motors",
//         model: "Taxi",
//         year: 1955,
//         color: "yellow",
//         passengers: 4,
//         convertible: false,
//         mileage: 281341
//    };

// var cadi = {
//         make: "GM",
//         model: "Cadillac",
//         year: 1955,
//         color: "tan",
//         passengers: 5,
//         convertible: false,
//         mileage: 12892
//    };

// prequal(cadi);

//    //Funtions
// function prequal(taxi) {
//   if (taxi.mileage > 10000) {
//     return false;
//   } else if (taxi.year > 1960) {
//     return false;
//   }
//     return true;
// }

// var worthALook = prequal(taxi);

// if (worthALook) {
//  console.log("You gotta check out this " + taxi.make + " " + taxi.model);
// } else {
//  console.log("You should really pass on the " + taxi.make + " " + taxi.model);
// }


// var fido = {
//     name: "Fido",
//     weight: 48,
//     breed: "Mixed",
//     loves: "walks"
// };

// loseWeight(fido, 10);

// function loseWeight(dog, amount) {
//     dog.weight = dog.weight - amount;
//    }
// alert(fido.name + " now weighs " + fido.weight);

// var fiat = {
//     make: "Fiat",
//     model: "500",
//     year: 1957,
//     color: "Medium Blue",
//     passengers: 2,
//     convertible: false,
//     mileage: 88000,
//     drive: function() {
//     alert("Zoom zoom!");
//     // a = 5;
//     // return a;
//   }
// };

// fiat.drive();

// let a = "x";
// let b = "v";
// let c = a - b;
// console.log(c)

// var song = {
//     name: "Walk This Way",
//     artist: "Run-D.M.C.",
//     minutes: 4,
//     seconds: 3,
//     genre: "80s",
//     playing: false,

//     play: function() {
//     if (!this.playing) {
//       this.playing = true;
//       console.log("Playing "
//       + this.name + " by " + this.artist);
//         }
//     },
//     pause: function() {
//       if (this.playing) {
//       this.playing = false;
//         }
//     }
// };
//  song.play();
//  song.pause();

//Excersie 

var chevy = {
  make: "Chevy",
  model: "Bel Air",
  year: 1957,
  color: "red",
  passengers: 2,
  convertible: false,
  mileage: 1021,
  started: false,
  //start function
  start: function () {
    this.started = true;
  },
  //stop function
  stop: function () {
    this.started = false;
  },
  //drive output
  drive: function () {
    if (this.started) {
      alert(this.make + " " +
        this.model + " goes zoom zoom!");
    } else {
      alert("You need to start the engine first.");
    }
  }
};

var cadi = {
  make: "GM",
  model: "Cadillac",
  year: 1955,
  color: "tan",
  passengers: 5,
  convertible: false,
  mileage: 12892,
  started: false,
  //start function
  start: function () {
    this.started = true;
  },
  //stop function
  stop: function () {
    this.started = false;
  },
  //drive output
  drive: function () {
    if (this.started) {
      alert(this.make + " " +
        this.model + " goes zoom zoom!");
    } else {
      alert("You need to start the engine first.");
    }
  }
};

var taxi = {
  make: "Webville Motors",
  model: "Taxi",
  year: 1955,
  color: "yellow",
  passengers: 4,
  convertible: false,
  mileage: 281341,
  started: false,
  //start function
  start: function () {
    this.started = true;
  },
  //stop function
  stop: function () {
    this.started = false;
  },
  //drive output
  drive: function () {
    if (this.started) {
      alert(this.make + " " +
        this.model + " goes zoom zoom!");
    } else {
      alert("You need to start the engine first.");
    }
  }
}

// cadi.start();
// cadi.drive();
// cadi.stop();

// chevy.start();
// chevy.drive();
// chevy.stop();

// taxi.start();
// taxi.drive();
// taxi.stop();

console.log('test', chevy["color"]);

var fiat = {
  make: "Fiat",
  model: "500",
  started: false,
  fuel: 0,
  //start the engine
  start: function () {
    this.started = true;
  },
  //stop the engine
  stop: function () {
    this.started = false;
  },
  //drive the engine
  drive: function () {
    if (this.started) {
      if (this.fuel > 0) {
        alert(this.make + " " +
          this.model + " goes zoom zoom!");
        this.fuel = this.fuel - 1;
      } else {
        alert("Uh oh, out of fuel.");
        this.stop();
      }
    } else {
      alert("You need to start the engine first.");
    }
  },
  addFuel: function (amount) {
    this.fuel = this.fuel + amount;
  }
};


fiat.start();
fiat.drive();
fiat.addFuel(2);
fiat.start();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.stop();
console.log("fial feul: ", fiat.addFuel);
