`
Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.
`;

class BankAccount {
    constructor(account, balance) {
        this.account = account;
        this.balance = balance;
    }

    checkBalance() {
        console.log(`Account: $${this.account}`);
        console.log(`Balance: $${this.balance}`);
    }

    deposit(n) {
        this.balance += n;
        console.log(`Deposited: $${n}. Balance: $${this.balance}`);
    }

    withdraw(n) {
        if (this.balance < n) {
            console.log(`Current balance: $${this.balance}. Insufficient balance for $${n}`);
        } else {
            this.balance -= n;
            console.log(`Withdrawn: $${n}. Balance: $${this.balance}`);
        }
    }
}

const account1 = new BankAccount('FS-2', 1000);

console.log(account1.checkBalance());

console.log(account1.deposit(800));
console.log(account1.checkBalance());

console.log(account1.withdraw(500));
console.log(account1.checkBalance());

console.log(account1.withdraw(3000));
console.log(account1.checkBalance());
