"use strict";
{
    const person1 = "bike";
    const getPropertyVlue = (obj, key) => {
        return obj[key];
    };
    const user = {
        name: "John",
        age: 22,
        address: "Wakanda",
    };
    // now can not send 2nd param which is not exist in the object
    const result3 = getPropertyVlue(user, "name");
    // user['age']
}
