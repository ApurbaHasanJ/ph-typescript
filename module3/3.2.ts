{
  // oop inheritance

  // so teacher and student class have some same poperties so we call make another calss for simplify the code 

  class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numOfHours: number) {
      console.log(`Student ${this.name} will sleep for ${numOfHours}`);
    }
  }

  class Student extends Parent {
   
    constructor(name: string, age: number, address: string) {
     super(name, age, address);
    }

  }

  const student1 = new Student("Apurba", 22, "USN");

  // student1.name

  class Teacher extends Parent {
   
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address)
      this.designation = designation;
    }
    takeClass(numOfHours: number) {
      console.log(`Teacher ${this.name} will take ${numOfHours}`);
    }
  }

  const teacher1 = new Teacher("Apurba", 22, "USN", "Professor");

  // teacher1.takeClass
}
