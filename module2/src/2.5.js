"use strict";
{
    // function with generics
    const createArray = (param) => {
        return [param];
    };
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const res1 = createArray("Bangladesh");
    // sending generic data
    const resGeneric = createArrayWithGeneric("Bangladesh");
    const resGenericObj = createArrayWithGeneric({ id: 222, name: "Apurba" });
    // touple 
    const createArrayWithTouple = (param1, param2) => {
        return [param1, param2];
    };
    const touple1 = createArrayWithTouple("Bangladesh", 222);
    const touple2 = createArrayWithTouple("Bangladesh", { name: "apurba" });
    // add fixed value,
    const addCourseToStudent = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({ name: "Mr. X", email: "VXgC8@example.com", devType: "Next Level" });
    const student2 = addCourseToStudent({ name: "Mr. Y", email: "YYY@example.com", hasWatch: "Apple Watch" });
}
