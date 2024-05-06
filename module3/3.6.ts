{
  //  Getter And Setter

  {
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

      //   setter

      set deposit(amount: number) {
        this._balance = this._balance + amount;
      }

      //   public addDeposit(amount: number) {
      //     this._balance = this._balance + amount;
      //   }

      // getter
      get balance() {
        return this._balance;
      }

      //   public getBalance() {
      //     return this._balance;
      //   }
    }

    const goribManusherAccount = new BankAccount(111, "Mr. Gorib", 100);
    // goribManusherAccount.addDeposit(300);
    // const currentBanlace = goribManusherAccount.getBalance();

    goribManusherAccount.deposit = 100;
    const currentBanlace = goribManusherAccount.balance;
    console.log(currentBanlace);
  }
}
