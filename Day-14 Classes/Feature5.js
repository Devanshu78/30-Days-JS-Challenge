//  Task-9 Make field private
// To set the field private or to use it insdie the calss we have to use '#'
class Account {
  #balance;
  constructor(first_deposit) {
    first_deposit > 0
      ? (this.#balance = first_deposit)
      : console.log("Enter valid number");
  }

  deposit(amount) {
    if (amount < 0) {
      throw new Error("Please enter valid number");
    } else {
      return (this.#balance += amount);
    }
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      throw new Error("Please enter valid number");
    } else {
      return (this.#balance -= amount);
    }
  }

  showBalance() {
    return this.#balance;
  }
}

const customer = new Account(1000);
console.log("when we try to access private member :: ", customer.balance); // Undefined
function user() {
  try {
    console.log("After deposit 100 ::", customer.deposit(100));
    console.log("Balance is ::", customer.showBalance());
    console.log("After withdraw 100 ::", customer.withdraw(100));
    console.log("Balance is ::", customer.showBalance());
  } catch (error) {
    console.error(error.message);
  }
}
user();
