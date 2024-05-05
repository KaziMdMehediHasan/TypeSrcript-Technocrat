{
    //encapsulation
    class BankAccount {
        public readonly id: number;     // prevent modifying the values
        public name: string;
        // private _balance: number; --> underscore is convention. when you use private you cannot access it in child class. It is only bound to the parent class. This why protected modifier is used

        protected _balance: number;

        constructor(id: number, name: string, _balance: number) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }

        addDeposit(amount: number) {
            this._balance += amount;
        }

        private getBalance() {
            return this._balance;
        }

        getHiddenMethod() {
            return this.getBalance();
        }
    }

    class StudentAccount extends BankAccount {
        test() {
            this._balance = this.getHiddenMethod();
        }
    }
    const gorib = new BankAccount(1, 'Mahdi', 100);
    gorib.addDeposit(50);

    console.log(gorib.getHiddenMethod());


    //
}