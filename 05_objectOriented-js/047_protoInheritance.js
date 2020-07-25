//Persin Constructor 
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName} `;
}

const person1 = new Person('John', 'Doe');

console.log(person1.greeting());

//Customer Constructor
function Customer(firstName, lastName, phone, membership){
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
} 

//Inherit 

Customer.prototype = Object.create(Person.prototype);

//Make customer.protype return customer ()
Customer.prototype.constructor = Customer;

//Create customer
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

//Customer greeting
Customer.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName} Welcome to out company`;
}

console.log(customer1);

console.log(customer1.greeting());
