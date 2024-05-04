{
    // Mapped Types

    const numbers : number[]= [1, 3, 4 , 5, 6, 7, 8, 9, 10]

    // const arrOfStrings: string[] = ['1', '2', '3']

    const arrOfStrings : string[] = numbers.map(number=> number.toString())
    console.log(arrOfStrings)

    type AreaNumber = {
        height: number,
        width: number,
    }

    // wrong process
    // type AreaString = {
    //     height: string,
    //     width: string,
    // }

    // look up type
    type Height = AreaNumber["height"]

    // T received => {height: string, width: number}
    // key => ["height"] look up type
    type AreaString<T> = {
        [key in keyof T]: T[key]
    }

    const area1 : AreaString<{height: string, width: number}>= {
        height: "10",
        width: 30
    }




}