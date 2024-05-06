{
  // Encapsulation In OOP

  // follow 3.5 and 3.6 which is private and protected

  // Access Modifiers

  class BankAccount {
    public readonly id: number;
    public name: string;
    // when we use private then the data can nat be updated outside of the class and also we can not access it from the clild class
    // private _balance: number;

    // for access the data from the clild class and avoid to update data out of the class we can use protected insted of provate
    protected _balance: number;

    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }

    public addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    private getBalance() {
      return this._balance;
    }

    getHiddenMethod(){
        return this.getBalance();
    }
  }

  //   child class
  class StudentAccount extends BankAccount {
    test() {
      this.getHiddenMethod();
    }
  }

  const goribManusherAccount = new BankAccount(111, "Mr. Gorib", 100);
  goribManusherAccount.addDeposit(300);
//   can not accessable cause its private
//   const currentBanlace = goribManusherAccount.getBalance();
//   console.log(currentBanlace);
}
