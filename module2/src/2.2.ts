{
  // interface

  type User1 = {
    name: string;
    age: number;
  };

  type rollNumber = number;

  // we can also use interface
  interface User2 {
    name: string;
    age: number;
  }

  type userWithRole1 = User1 & { role: string };

  interface userWithRole2 extends User2 {
    role: string;
  }

  const user1: userWithRole2 = {
    name: "Apurba",
    age: 22,
    role: "admin",
  };

  const user2: User2 = {
    name: "John",
    age: 34,
  };

  //   js --> object, array --> object, function --> object
  type Roll1 = number[];
  interface Roll2 {
    [index: number]: number;
  }
  const rollNumber1: Roll2 = [1, 2, 3];

  type Add1 = (num1: number, num2: number) => number;

  interface Add2 {
    (num1: number, num2: number): number;
  }
  const add: Add2 = (num1, num2) => num1 + num2;
}
