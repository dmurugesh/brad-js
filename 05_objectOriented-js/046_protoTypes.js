//Object.protype
//Person.prototype

//Person constructor
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
}

//Calculate Age

Person.prototype.calculatedAge = function(){
    const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
}

//Fullname
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

//Get Married 
Person.prototype.getMarried = function(newLastName){
    this.lastName = newLastName;
}


const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

console.log(mary.getFullName());

mary.getMarried('Smith');

console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty('getFullName'));