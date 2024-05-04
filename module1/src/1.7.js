"use strict";
{
    // spread operator
    // rest operator
    // destructuring
    // learn spread operator
    const bros1 = ["mir", "japor", "halima"];
    const bros2 = ["sultan", "alaudin", "arturul"];
    bros1.push(...bros2);
    //   spreading objects
    const mentors1 = {
        typescript: "Firoj",
        redux: "mir",
        dbms: "mizan",
    };
    const mentors2 = {
        prisma: "mezba",
        next: "tonmoy",
        cloud: "nahid",
    };
    const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
    // learn rest operator
    const greetFriends = (...friends) => {
        // console.log(`Hi ${fr1} ${fr2} ${fr3}`)
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greetFriends("abbas", "dabbas", "kubbas", "hubbas");
}
