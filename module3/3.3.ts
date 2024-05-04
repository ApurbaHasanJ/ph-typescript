{
  // Type Guard Using Typeof & In

  //   typeof -> type guard

  type Alphaneumeric = string | number;

  const add = (param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result1 = add("2", "3");
  console.log(result1);

  //   "in" guard only works with objects
  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    //    user.name
    if ("role" in user) {
      user.role; // role can be accesable
      console.log(`My name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`My name is ${user.name} and i've no role`);
    }
  };

  const normalUser: NormalUser = {
    name: "Apurba Hasan J",
  };

  const adminUser: AdminUser = {
    name: "Zeesan",
    role: "admin",
  };

  getUser(adminUser)
}
