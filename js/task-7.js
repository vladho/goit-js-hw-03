const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,

  transactions: [],

  createTransaction(amount, type) {
    const transactions = { id: this.transactions.length + 1, amount, type };
    return transactions;
  },

  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
    this.balance += amount;
  },
  withdraw(amount) {
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
    let balance = this.balance;
    balance -= amount;
    if (balance < 0) {
      alert('Недостаточно средств!');
    } else {
      this.balance -= amount;
    }
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    for (let element of this.transactions) {
      if (element.id === id) {
        return element;
      }
    }
  },

  getTransactionTotal(type) {
    const allElement = [];
    let summ = 0;
    for (let element of this.transactions) {
      if (element.type === type) {
        allElement.push(element);
        summ += element.amount;
      }
    }

    return { allElement, summ };
  },
};

account.deposit(1000);
account.withdraw(400);
account.deposit(2000);
account.deposit(3500);
account.withdraw(700);
account.deposit(800);
account.deposit(100);
account.withdraw(500);

console.table(account.transactions);
console.log('Balance:', account.getBalance());

console.log(account.getTransactionDetails(2));

console.table(account.getTransactionTotal('deposit').allElement);
console.log("Summ:", account.getTransactionTotal('deposit').summ);
