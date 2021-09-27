let firstName : string = "srujan"
let secondName : string = "patluri"
let age : number = 21
let motive: string = "not to give up"

//Array
let n : number[] = [1,2,3,4];
n.push(10);

//Tuples
let tu: [number,string] = [21,"Srujan"]
//Tuple Unions
let tuar : [number,string][]

tuar = [
    [1,"sde"],
    [2, "fd"],
    [3, "se"],
]

//Unions:
let pid : number | string = 1

//Enums
enum eNums {
    one,
    two,
    three,
    four,
}

// console.log(eNums.three);

//Interface
type User = {
    id: number,
    name: string
}
const user: User = {
    id: 1,
    name: "srujan",
}

console.log(user.name);


