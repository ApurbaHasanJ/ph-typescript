"use strict";
var _a, _b;
{
    // Ternary operator || Optional chaining || Nullish Coalescing
    const age = 19;
    const isAdult = age >= 18 ? "adult" : "not adult";
    // console.log({isAdult})
    // Nullish Coalescing operator
    // null / undefined -> decision making
    const isAuthenticated = "";
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "guest";
    const result2 = isAuthenticated ? isAuthenticated : "Guest";
    const user = {
        name: "Zeesan",
        address: {
            city: "NK",
            road: "maijdee",
            presentAddress: "maijdee town",
        },
    };
    const permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "No Permanent Address";
    console.log({ permanentAddress });
}
