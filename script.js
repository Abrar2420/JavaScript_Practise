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
let data6 = Symbol("id"); // symbol, a special value thats always unique, i.e. even if the same value is given to two symbol, they would still be different and unigue
console.log(data6);
let data7 = 123456789012345678901234567890n; // BigInt, use when assign very big numver, and its denoten by n and the end of the number
console.log(data7);

// JavaScript Operators

// Arithmatic Operators

let operation1 = 5 + 5; // addition, adds two value
console.log(operation1);
let operation2 = 15 - 10; // subtraction, subtracts two value
console.log(operation2);
let operation3 = 15 * 10; // multiplication, multiplys two value
console.log(operation3);
let operation4 = 15 / 10; // division, divides two value
console.log(operation4);
let operation5 = 15 ** 10; // exponent, to denote the exponent of a value, here: 15^10.
console.log(operation5);
let operation6 = 15 % 10; // Modulus, remainder of after the division of two values.
console.log(operation6);
let operation7 = 5; // increment, increases the value by 1 of the incremented variable.
operation7++;
console.log(operation7);
let operation8 = 5; // decrement, decreases the value by 1 of the decremented variable.
operation8--;
console.log(operation8);

// Order of operations in JavaScript

// () > ** > unary operators > (*,/,% "left to right") > (+,- "LTR") > (<, <=, >, >= "LTR") > (==, !=, ===, !== "LTR") > && > || > =

// Assignment Operators
let y;
let x = 5;
y = x; // =, assigns a values to a variable
console.log(y);
y += x; // short hand for y = y + x;
console.log(y);
y -= x; // short hand for y = y - x;
console.log(y);
y *= x; // short hand for y = y * x;
console.log(y);
y **= x; // short hand for y = y ** x;
console.log(y);
y /= x; // short hand for y = y / x;
console.log(y);
y %= x; // short hand for y = y % x;
console.log(y);

// Logical Operators

let a = true;
let b = false;

console.log(a && b); // &&, if all the arguments given to the && are true it returns true, any argument is flase it returns false

let c = true;
let d = false;

console.log(a || b); // ||, if all the arguments given to the || operator are true it returns true, if one of the operator is true it returns true

let e = true;

console.log(!e); // logical not, here it will return false

//Comparision Operators
//compares value and returns true or false
let com1 = 6;
let com2 = 7;
let com3 = 6;
let com4 = "6";
console.log(com1 == com2); // return true if the compared values are same
console.log(com1 == com3); // return true if the compared values are same
console.log(com1 === com3); // return true if the compared values are same and are of the same datatype
console.log(com1 === com4); // return true if the compared values are same and are of the same datatype
console.log(com1 != com2); // return true if the compared values are true for ==. and vise versa
console.log(com1 !== com4); // return true if the compared values are true for ===. and vise versa
console.log(com1 > com2); // returns true if the compared valuer match the comparision
console.log(com1 < com2); // return true if the compared values match the comparision
console.log(com1 >= com3); // return true if the compared values match the comparision
console.log(com1 <= com2); // return true if the compared values match the comparision

// Ternary Operator

// condition ? valueIfTrue : valueIfFalse

let age = 18;
let canVote = age >= 18 ? "Yes, can vote" : "No, too young";
console.log(canVote); // "Yes, can vote"

// if else statement

/* if (condition1) {
  // code to execute if condition1 is true
} else if (condition2) {
  // code to execute if the condition1 is false and condition2 is true
} else {
  // code to execute if the condition1 is false and condition2 is false
}
*/
// ////////////Pracitse More/////////
