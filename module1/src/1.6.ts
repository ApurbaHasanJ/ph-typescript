{
  const addArrow = (num1: number, num2: number): number => num1 + num2;

  // object -- function -- method

  const poorUser = {
    name: "Apurba Hasan J",
    balance: 0,
    addBalance(balance: number): string {
      return `My balance: ${this.balance + balance}`;
    },
  };

  const arr: number[] = [1, 3, 10];

  const newArray = arr.map((elem: number): number => elem * elem);
}
