// Chuyển function Person sang class Person 
class Person {
    constructor(name, yearOfBirth) {
        this.name = name
        this.yearOfBirth = yearOfBirth
    }

    getAge = () => {
        return new Date().getFullYear() - this.yearOfBirth
    }

    static getRandomPerson(nameArray) {
        const randomName = nameArray[Math.floor(nameArray.length * Math.random())]
        return new Person(randomName, 10)
    }
}

// const test = new Person('Nguyen Van Ba', 2000)
// console.log(Person.getRandomPerson(['ba', 'tuan', 'tuan anh']))

function Vehicle(type) {
    this.type = type
}

function Car(name) {
    Vehicle.call(this, 'duong bo')
    // Vehicle.apply(this, ['duong bo'])
    this.name = name
}

let vinfast = new Car('vinfast')
console.log(vinfast.type)