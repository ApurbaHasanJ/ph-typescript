{
  // generic type

  type GenericArray<T> = Array<T>;

  //   const rollNumbers: number[] = [3, 6, 8];
  const rollNumbers: GenericArray<number> = [3, 6, 8];

  //   const mentors: string[] = ["mr. x", "mr. y", "mr. z"];
  const mentors: Array<string> = ["mr. x", "mr. y", "mr. z"];

  //   const bollArray: boolean[] = [true, false, true];
  const bollArray: Array<boolean> = [true, false, true];

  interface User {
    name: string;
    age: number;
  }

  const user: GenericArray<User> = [
    {
      name: "John",
      age: 21,
    },
    {
      name: "Apurba",
      age: 100,
    },
  ];
  const add = (x: number, y: number) => x + y;

  add(20, 30);

  type GenericTuple<X, Y> = [X, Y];

  //  generic Tuple
  const manush: GenericTuple<string, string> = ["mr. X", "mr. Y"];

  const userWithId: GenericTuple<number, { name: string; email: string }> = [
    123,
    { name: "John", email: "john@gmail.com" },
  ];
}
