{

    // constrains
    // add fixed value,
    const addCourseToStudent = <T extends { name: string; id: number; email: string }>(student: T) => {
        const course = "Next Level Web Development"

        return {
            ...student,
            course
        }
    }

    const student3 = addCourseToStudent({ id: 212, name: "Apurba", email: "VXgC8@example.com", emni: "emni" })
    const student1 = addCourseToStudent({ id: 222, name: "Mr. X", email: "VXgC8@example.com", devType: "Next Level" })
    const student2 = addCourseToStudent({ id: 123, name: "Mr. Y", email: "YYY@example.com", hasWatch: "Apple Watch" })
}