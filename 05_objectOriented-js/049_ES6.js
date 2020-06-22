class Person{
    constructor(firstName, lastName, dob) {
        this.FirstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }
    greteting() {
        return  `Hellow there ${this.firstName} ${this.lastName}`;
    }

    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried(newLastName) {
        this.lastName = newLastName;
    }

    static addNumbers(x, y) {
        return x + y;
    }
}

const mary = new Person('Mary', 'Williams', '11-12-1995');

mary.getsMarried('thompson');

console.log(mary);

console.log(Person.addNumbers(1,2));