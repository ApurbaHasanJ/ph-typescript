{
  // Abstraction In OOP: 1. interface, 2. abstract

  //   idea
  interface Vehicle1 {
    // name: string;
    // model: number
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  // object type
  // const vehicle1: Vehicle1 = {
  //     name: "Toyota",
  //     model: 2000
  // }

  // class type
  //   real implemetatin
  class Car implements Vehicle1 {
    startEngine(): void {
        console.log("i'm starting engine");
    }
    stopEngine(): void {
        console.log("i'm stopping engine");
    }
    move(): void {
        console.log("i'm moving the car")
    }
    test(){
        console.log("i am just testing")
    }
  }

  const toyotaCar = new Car();
  toyotaCar.startEngine();


//   using abstract class: i called it leader
abstract class Car2{
    abstract startEngine(): void 
    abstract stopEngine(): void
    abstract  move(): void 
    test(){
        console.log("i am just testing")
    }
  
}

// idea
class toyotaCar2 extends Car2{
    startEngine(): void {
        console.log("i'm starting")
    }
    stopEngine(): void {
        console.log("i'm stopping")
    }
    move(): void {
        console.log("i'm moving")
    }

}


// const bike = new Car2();
// bike.
}
