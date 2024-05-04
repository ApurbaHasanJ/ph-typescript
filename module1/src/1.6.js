"use strict";
{
    const addArrow = (num1, num2) => num1 + num2;
    // object -- function -- method
    const poorUser = {
        name: "Apurba Hasan J",
        balance: 0,
        addBalance(balance) {
            return `My balance: ${this.balance + balance}`;
        },
    };
    const arr = [1, 3, 10];
    const newArray = arr.map((elem) => elem * elem);
}
