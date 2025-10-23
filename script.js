// ================ console practise ===============

// console.log("hello world");
// console.error("this is an error");
// console.warn("warniing messeage before deletion");
// console.info("info on JavaScript");
// console.time("label");

// console.timeEnd("label"); // Stop timer and show time

// ================ console practise ===============

// JavaScript Variables

// 1. var

var fname = "Abrar"; // A global scope variable. can't be re-assigned
console.log(fname);
var fname = "Fahim"; // can redeclare
console.log(fname);

// 1. let

let firname = "Abrar"; // A block scope variable.
console.log(firname);
fname = "Fahim"; //  can re-assign
console.log(firname);
// let fname = "Fahim"; // can't redeclare *Error
// console.log(fname);

// 1. const

const firstname = "Haris"; //A block scope variable.
console.log(firstname);
// fname = "Fahim"; //  can't re-assign. *Error
// console.log(fname);
// const fname = "Fahim"; // can't redeclare *Error
// console.log(fname);

// data type premitive

let data1 = "string"; // string anythng witten inside quotes
console.log(data1);
let data2 = 50; // number with out quotes
console.log(data2);
let data3 = true; // boolean returns true or false
console.log(data3);
let data4 = null; // null, no value, keeping it intentionally empty.
console.log(data4);
let data5; // undifined, when no value has been set for a variable it stays undifined.
console.log(data5);
