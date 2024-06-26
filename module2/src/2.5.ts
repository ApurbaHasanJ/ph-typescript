{
    // function with generics

    const createArray = (param: string): string[] => {
        return [param]
    }
    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    }


    const res1 = createArray("Bangladesh")
    // sending generic data
    const resGeneric = createArrayWithGeneric<string>("Bangladesh")

    type User = { id: number, name: string }
    const resGenericObj = createArrayWithGeneric<User>({ id: 222, name: "Apurba" })


    // touple 

    const createArrayWithTouple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2]
    }

    const touple1 = createArrayWithTouple<string, number>("Bangladesh", 222)
    const touple2 = createArrayWithTouple<string, { name: string }>("Bangladesh", { name: "apurba" })


    // add fixed value,
    const addCourseToStudent = <T>(student: T) => {
        const course = "Next Level Web Development"

        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({ name: "Mr. X", email: "VXgC8@example.com", devType: "Next Level" })
    const student2 = addCourseToStudent({ name: "Mr. Y", email: "YYY@example.com", hasWatch: "Apple Watch" })
}
