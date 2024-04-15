`
Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.
`;

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    display() {
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
    }
}

class Car extends Vehicle {
    constructor(make, model, year, doorsNumber) {
        super(make, model, year);
        this.doorsNumber = doorsNumber;
    }

    display() {
        super.display();
        console.log(`No. Doors: ${this.doorsNumber}`);
    }
}

const vehicle = new Vehicle('Ford', 'F-150', 2020);

const car1 = new Car('Kia', 'Kia-5', 2024, 4);

car1.display();
