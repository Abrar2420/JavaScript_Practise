console.log("Operators & Expressions");

// Comparision Operators

let a = 4;
let b = 6;
let d = "4";
let e = "gibrish";

//& returs true as 4 = "4", as its value. Doesn't chenk if the type matches or not
// console.log(a == d);

//& returs false, as it also checks the type, which is this case are not same for both valuse
// console.log(a === d);
// let t = 5 + "slkdjf";
// console.log(t);

let obj1 = { name: "John", name: "Harry" };
let obj2 = { name: "John", name: "Harry" };

//& Checks if the reference for obj1 matches obj2, here both have different refference in memory. // output: false
// console.log(obj1 === obj2);

let arr1 = [];
let arr2 = [];

// console.log(arr1 === arr1);

// ****** Logical Operators ********
// && || ?? !

//& is js 0 coresponds to fase and 1 coresponds to true
// both flase value here will return the last false value
/*
console.log(0 && 0); // output: 0
console.log(1 && 0 && 1); // output: 0, breaks at the last false value
console.log(0 && 1);
console.log(1 && 1); // output: 1, both true value, returns the last one
console.log("hello" && "world"); // both true, returns the last one "world"
console.log(1 && 0);

// || operator will return the first true value
// will return the last false value if all vaules are false
console.log("hello" || "world"); //  output: "hello"
console.log(undefined || null); // output: null

console.log(!true); //output: false
console.log(!false); //output: true
console.log(!!false); //output: false
console.log(!!"hello"); //output: true
*/
//& nullish operator
// ??

// will return the firts value which is not 'null' or 'undifined'

// console.log(null ?? true); //output: true, because 1st value is null
// console.log(null ?? "game" ?? undefined); //output: game
// console.log((12).toString(2));

//& bitwise operator
// 11 & 12

// 1011 & 1100 = 1100 {0 * (2 ** 0)} + {0 * (2 ** 1)} + {1 * (2 ** 2)} + {1 * (2 ** 3)}

// 11/2 = 5 (1)
// 5/2 = 2 (1)
// 2/2 + 1 (0)

// 12/2 = 6 (0)
// 6/2 = 3 (0)
// 3/2 = 1 (1)

// 11 | 12
// 1011 | 1100 = 1111

//11 ^ 12
// 1011 ^ 1100 = 0111 //to return 1 both of them should not be 0 or 1

//&  Traffic Light Simulation.

let red = false;

let direction = red ? "Stop" : "Go";

console.log(direction);

let count = 5;

let newCount = count << 1;

console.log(newCount);
