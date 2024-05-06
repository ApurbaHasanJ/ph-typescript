{
  // Statics In OOP

  class Counter {
    static count: number = 0;
    // and also if we use static in the method lets see what happen
    static increment() {
      return (Counter.count = Counter.count + 1);
    }
    static decrement() {
      return (Counter.count = Counter.count - 1);
    }
  }

  //   const instance1 = new Counter();
  //   console.log(instance1.increment()); // 1 --> different memory
  //   console.log(instance1.increment()); // 2 --> different memory
  //   console.log(instance1.increment()); // 3 --> different memory
  //   console.log(instance1.increment()); // 4 --> different memory

  //   different memory
  //   const instance2 = new Counter();
  //   console.log(instance2.increment()); // 1 --> different memory
  //   console.log(instance2.increment()); // 2 --> different memory
  //   console.log(instance2.increment()); // 3 --> different memory
  //   console.log(instance2.increment()); // 4 --> different memory

  //   but if i use static in the class then the memory will acknolaged
  // const instance3 = new Counter();
  // console.log(instance3.increment()); // 1 --> different memory)
  // console.log(instance3.increment()); // 2 --> different memory)
  // console.log(instance3.increment()); // 3 --> different memory)

  // after using static in the method we can easily make instance
  // const instance4 = new Counter(); // we don't have to make instance
  console.log(Counter.increment()); // 1 --> different memory
  console.log(Counter.increment()); // 2 --> different memory
  console.log(Counter.increment()); // 3 --> different memory
}
