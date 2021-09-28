"use strict";
let firstName = "srujan";
let secondName = "patluri";
let age = 21;
let motive = "not to give up";
//Array
let n = [1, 2, 3, 4];
n.push(10);
//Tuples
let tu = [21, "Srujan"];
//Tuple Unions
let tuar;
tuar = [
    [1, "sde"],
    [2, "fd"],
    [3, "se"],
];
//Unions:
let pid = 1;
//Enums
var eNums;
(function (eNums) {
    eNums[eNums["one"] = 0] = "one";
    eNums[eNums["two"] = 1] = "two";
    eNums[eNums["three"] = 2] = "three";
    eNums[eNums["four"] = 3] = "four";
})(eNums || (eNums = {}));
const user = {
    id: 1,
    name: "srujan",
};
const user1 = {
    id: 2,
    name: "Patluri",
};
//Type Assertions
let some = "srujan";
let name1 = some;
let name2 = some;
// console.log(name1)
//Functions
function addNum(x, y) {
    return x + y;
}
// console.log(addNum(5,4));
// Void Functions
function displayMsg(message) {
    console.log(message);
}
// displayMsg("Hello From Typescript");
const ar = (mes) => {
    console.log(mes);
};
const userInfo = {
    id: 1,
    name: "srujan"
};
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is the new member to register`;
    }
}
const firstPerson = new Person(1, "Srujan");
// console.log(firstPerson.register());
//Generics
function getArray(items) {
    return new Array().concat(items);
}
const numArr = getArray([1, 2, 3, 4, 5]);
const strArr = getArray(["srujan", "aspiring SDE", "Frontend developer"]);
console.log(numArr);
