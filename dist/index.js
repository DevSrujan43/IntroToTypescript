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
console.log(user.name);
