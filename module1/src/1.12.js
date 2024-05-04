"use strict";
{
    // nullable types
    const searchName = (value) => {
        if (value) {
            console.log("searching");
        }
        else {
            console.log("nothing to search");
        }
    };
    searchName(null);
    // unknown types (typeof)
    const getSpeedInMeterPerSecond = (value) => {
        if (typeof value === "number") {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`the speed is ${convertedSpeed} ms -1`);
        }
        else if (typeof value === "string") {
            const [result, unit] = value.split(" ");
            const convertedSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(convertedSpeed);
        }
        else {
            console.log("Wrong input");
        }
    };
    getSpeedInMeterPerSecond(`1000 kmh-1`);
    //   never
    const throwError = (msg) => {
        throw new Error(msg);
    };
    throwError("Mushkil se error ho geya");
}
