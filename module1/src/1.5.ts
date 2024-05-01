{
  // object ---> reference type

  const user: {
    company: "Vertex"; // type --> literal type
    firstName: string;
    middleName?: string; //optional type
    lastName: string;
  } = {
    company: "Vertex",
    firstName: "John",
    lastName: "Smith",
  };
}
