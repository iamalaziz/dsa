export class User {
    firstName: string;
    lastName: string;
    email: string;

    constructor(firstName: string, lastName: string, email: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    deosEmailMatch(email: string): boolean {
        return this.email == email;
    }
}

const user1 = new User('Dave', 'Grey', 'dave@gmail.com');

console.log(user1.fullName);
