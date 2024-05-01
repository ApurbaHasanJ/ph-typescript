{
  // destructuring


//   object
  const user = {
    id: 345,
    name: {
      fistName: "Apurba",
      middleName: "Hasan",
      LastName: "J",
    },
    contractNo: "017000000",
    address: "Wakanda",
  };

  const {
    contractNo,
    name: { middleName },
  } = user;


//   array destructuring
const myFriends = ['Cap', "Tony", "thor", "hulk", "widow", "loki"]
const [, , besFriend, ...rest]= myFriends
}
