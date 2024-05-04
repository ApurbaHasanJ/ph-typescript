{
    // generic constrain with keyof operator

    type Vehicle = {
        bike: string,
        car: string,
        ship: string
    }

    type Owner = "bike" | "car" | "ship"; // menually

    type Owner2 = keyof Vehicle

    const person1: Owner2 = "bike"


    const getPropertyVlue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key]
    }

    const user = {
        name: "John",
        age: 22,
        address: "Wakanda",
    }

    // now can not send 2nd param which is not exist in the object
    const result3 = getPropertyVlue(user, "name")



    // user['age']

}