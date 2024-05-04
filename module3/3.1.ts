{
  // oop - class

  // class property
  class Animal {
//    public name: string;
//    public species: string;
//    public sound: string;

    // parameters poperties 
    constructor(public name: string, public species: string, public sound: string) {
    //   this.name = name;
    //   this.species = species;
    //   this.sound = sound;
    }

    // class function => cls method
    // and also "this" doesnot works with array functions, so we need to use normal function
    makeSound() {
      console.log(`The ${this.name} sounds are ${this.sound}`);
    }
  }

  const dog = new Animal("German Shepared Bhai", "Dog", "Ghew Ghew");
  dog.name; //now it can be accessable

  const cat = new Animal("Parsian Cat", "Cat", "Meow Meow");
  cat.name; //now it can be accessable

  dog.makeSound();
}
