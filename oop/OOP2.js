`
Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter
`;

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateParameters() {
        return 2 * (this.width + this.height);
    }
    calculateArea() {
        return this.width * this.height;
    }
}

const rect1 = new Rectangle(4, 6); // p: 20, s: 24
const rect2 = new Rectangle(50, 20); // p:140, s: 1000

console.log(rect1.calculateParameters());
console.log(rect1.calculateArea());
console.log(rect2.calculateParameters());
console.log(rect2.calculateArea());
