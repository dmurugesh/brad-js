const personPrototypes = {
    greeting: function() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName){
    this.lastName = newLastName;
    }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Willams';
mary.age = 30;

mary.getsMarried("Smith");


console.log(mary.greeting());

const brad = Object.create(personPrototypes, {
    firstName : {value: 'Brad'},
    lastName: {value: 'Travesy'},
    age: {value: 36}
});

console.log(brad);

console.log(brad.greeting());