{
  // Ternary operator || Optional chaining || Nullish Coalescing

  const age: number = 19;

  const isAdult = age >= 18 ? "adult" : "not adult";
  // console.log({isAdult})

  // Nullish Coalescing operator

  // null / undefined -> decision making

  const isAuthenticated = "";

  const result1 = isAuthenticated ?? "guest";

  const result2 = isAuthenticated ? isAuthenticated : "Guest";
//   console.log({ result1 }, { result2 });

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "Zeesan",
    address: {
      city: "NK",
      road: "maijdee",
      presentAddress: "maijdee town",
    },
  };

  const permanentAddress = user?.address?.permanentAddress ?? "No Permanent Address"
  console.log({ permanentAddress });
}
