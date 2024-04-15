`
1. Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.
`;

class Person {
    constructor(firstName, age, country) {
        this.firstName = firstName;
        this.age = age;
        this.country = country;
    }
    getDetails() {
        return { firstName: this.firstName, age: this.age, country: this.country };
    }
}

const person1 = new Person('John', 23, 'USA');
const person2 = new Person('Jane', 33, 'Germany');

console.log(person1.getDetails());
