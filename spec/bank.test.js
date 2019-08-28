var bank = require('../public/js/bank').Bank

describe('Notes', () => {
    beforeEach(() => {
        var account = new bank();

    });

    describe('displayBalance', () => {
        test('should print bank statement', () => {
            var account = new bank();
            expect(account.displayBalance()).toMatch('current balance: £0');
        });
    });

    describe('statement', () => {
        test('should return an account statement', () => {
            var account = new bank();
            expect(account.statement()).toEqual('date || credit || debit || balance\n' + account.currentTransaction() );
        });
    });

    describe('currentTransaction', () => {
        test('should return the current transaction', () => {
            var account = new bank();
            expect(account.currentTransaction()).toEqual('');
        });
    });


    describe('readTransactions', () => {
        test('should return an array of transactions', () => {
            var account = new bank();
            expect(account.readTransactions()).toEqual([]);
        });
    });

    describe('setTransaction', () => {
        test('should set the current transaction', () => {
            var account = new bank();
            account.setTransaction(10, 50);
            date = new Date().getDate() + '/' + (new Date().getMonth()+1)  + '/' + new Date().getFullYear()
            expect(account.currentTransaction()).toEqual(date +' || 10 || 50')
        });
    })

    describe('addTransaction', () => {
        test('should add the current transaction to the transactions array', () => {
            var account = new bank();
            account.setTransaction(10, 50);
            account.addTransaction();
            date = new Date().getDate() + '/' + (new Date().getMonth()+1)  + '/' + new Date().getFullYear()
            expect(account.readTransactions()).toEqual([date + ' || 10 || 50'])
        });

        test('after a transaction(i.e depositing money ) the trasactions array should be populated', () => {
            var account = new bank();
            account.deposit(100);
            date = new Date().getDate() + '/' + (new Date().getMonth()+1)  + '/' + new Date().getFullYear()
            expect(account.readTransactions()).toEqual([date + ' || 100 || 100']);
        });

        test('after a transaction(i.e depositing money ) the trasactions array should be populated', () => {
            var account = new bank();
            account.withdraw(100);
            date = new Date().getDate() + '/' + (new Date().getMonth()+1)  + '/' + new Date().getFullYear()
            expect(account.readTransactions()).toEqual([date + ' || 100 || -100']);
        })
    })

    describe('deposit', () => {
        test('deposit should add money to account', () => {
            var account = new bank();
            // account.deposit = jest.fn((x) => account.showBalance() + x)
            account.deposit(100);
            expect(account.showBalance()).toBe(100);
        });

        // test('depositing should change the current transaction', () => {
        //     var account = new bank();
        //     account.deposit(20);
        //     expect(account.currentTransaction()).toEqual(20);
        // });
    });

    describe('withdraw', () => {
        test('withdraw should add money to account', () => {
            var account = new bank();
            // account.withdraw = jest.fn((x) => account.showBalance() - x)
            account.deposit(100);
            account.withdraw(80);
            expect(account.showBalance()).toBe(20);
        });

        // test('Withdrawing should change the current transaction', () => {
        //     var account = new bank();
        //     account.withdraw(30);
        //     expect(account.currentTransaction()).toEqual(30);
        // });
    });


})