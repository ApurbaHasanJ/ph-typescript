"use strict";
{
    // type assertion / type narrowing
    let anything;
    anything = "Next Level Web development";
    anything;
    const kgToGm = (value) => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `the converted value is: ${convertedValue}`;
        }
        if (typeof value === "number") {
            return value * 1000;
        }
    };
    const result1 = kgToGm(1000);
    const result2 = kgToGm("2000");
    try {
    }
    catch (error) {
        console.log(error.message);
    }
}
