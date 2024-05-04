{

    // utility types
    // pick

    type Person ={
        name:string;
        age:number;
        email?:string;
        contactNo:string;
    }

    type Name = Pick<Person, "name"|"age">


    // omit
    type ContactInfo = Omit<Person,  "name"|"age">

    // require to avoid optional
    type PersonRequired = Required<Person>

    // Partial to make everything optional
    type PersonPartical = Partial<Person>

    // readonly

    type PersonReadonly = Readonly<Person>

    const person1 : PersonReadonly = {
        name: "John",
        age: 200,
        contactNo: "9287428",
    }

    // after used readonly Cannot assign to 'name' because it is a read-only property.
    // person1.name = "Apurba"



    // record Type

    // wrong way
    // type MyObj = {
    //     a: string,
    //     b: string
    // }

    // right way
    type MyObj = Record<string, string>

    const emptyObj : Record<string, unknown> = {}

    emptyObj.name="Apurba"


    const obj1 : MyObj = {
        a: "hello",
        b: "world"
    }


}