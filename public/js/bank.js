(function(exports) {
  function Bank() {
      this.balance_amount = 0;
      this.transactionsArray = [];
      this.transaction = '';
      this.date = new Date().getDate() + '/' + (new Date().getMonth()+1)  + '/' + new Date().getFullYear();
  }

  Bank.prototype.showBalance = function() {
    return this.balance_amount;
  }

  Bank.prototype.displayBalance = function() {
    return 'current balance: £' + this.balance_amount;
  };

  Bank.prototype.statement = function() {
    return 'date || credit || debit || balance' + "\n" + this.readTransactions().join('\n');
  }

  Bank.prototype.currentTransaction = function() {
    return this.transaction;
  }

  Bank.prototype.setTransaction = function(amount, balance) {
    this.transaction = this.date + " || " + amount + " || " + balance;
    return this.transaction;
  }

  Bank.prototype.addTransaction = function() {
    this.transactionsArray.push(this.currentTransaction());
    return this.transaction;
  }

  Bank.prototype.deposit = function(amount) {
    this.balance_amount += amount;
    var balance = this.balance_amount;
    this.setTransaction(amount, balance);
    this.addTransaction();
    return this.balance_amount;
  }
  
  Bank.prototype.withdraw = function(amount) {
    this.balance_amount -= amount;
    var balance = this.balance_amount;
    this.setTransaction(amount, balance);
    this.addTransaction();

    return this.balance_amount;
  }

  Bank.prototype.readTransactions = function(amount) {
    return this.transactionsArray;
  }

  exports.Bank = Bank;
})(this);

