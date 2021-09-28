

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

// console.log(user.name);

//Example : 2

type data = {
    id : number,
    name : string,
}

const user1 : data = {
    id : 2,
    name : "Patluri",
}

//Type Assertions

let some : any = "srujan"
let name1 = <string>some
let name2 = some as string
// console.log(name1)

//Functions

function addNum(x:number,y:number) : number{
    return x + y
}

// console.log(addNum(5,4));

// Void Functions

function displayMsg(message: number | string ) : void {
    console.log(message);
}

// displayMsg("Hello From Typescript");

const ar = (mes : number) : void => {
    console.log(mes);
}

// ar(1);

//Interfaces
interface userName {
    id: number,
    name: string,
    age?: number
}

const userInfo : userName = {
    id: 1,
    name: "srujan"
}

interface MathFunc {
    (x:number, y:number) : number
}

//Classes in typescript

interface personInterface {
    id: number,
    name: string,
    register(): string
}

class Person implements personInterface {
    id: number
    name: string

    constructor(id: number , name: string){
        this.id = id
        this.name = name
    }

    register(){
        return `${this.name} is the new member to register`
    }
}

const firstPerson = new Person(1,"Srujan")
// console.log(firstPerson.register());


//Generics

function getArray<T>(items: T[]) : T[] {
    return new Array().concat(items)
}

const numArr = getArray<number>([1,2,3,4,5])
const strArr = getArray<string>(["srujan","aspiring SDE", "Frontend developer"])

console.log(numArr);


