{
  // type alias

  type Student = {
    name: string;
    age: number;
    gender: string;
    contractNo?: string;
    address: string;
  };

  const student1: Student = {
    name: "Apurba",
    age: 22,
    gender: "Male",
    contractNo: "0170000000",
    address: "NK",
  };

  const student2: Student = {
    name: "Zeesan",
    age: 22,
    gender: "Male",
    address: "NK",
  };

  type UserName = string;
  const userName: UserName = "Zeesan";

  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;
}
