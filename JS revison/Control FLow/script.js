console.log("Control flow in JS");

//? ATM Cash Withdrawal System (multiples of 100)

// let amount = prompt("Enter amount:");

// if (amount % 100 === 0) {
//   console.log(`Succesfull withdrawl of ${amount} TK`);
// } else {
//   console.log(`${amount} is not a multiple of 100, withdrawl rejected!!`);
// }

//? Calculater with switch case

// let fNum = parseInt(prompt("Enter a number:"));
// let operator = prompt("Enter an operator:");
// let lNum = parseInt(prompt("Enter a number:"));

// switch (operator) {
//   case "+":
//     console.log(fNum + lNum);
//     break;
//   case "-":
//     console.log(fNum - lNum);
//     break;
//   case "*":
//     console.log(fNum * lNum);
//     break;
//   case "/":
//     console.log(fNum / lNum);
//     break;
//   default:
//     console.log("Incorrect input");
//     break;
// }

//? Determine the triangle type

let sideA = 1;
let sideB = 2;
let sideC = 3;

if (sideA === sideB && sideA === sideC) {
  console.log("Equilateral Triangle");
} else if (sideA === sideB || sideA === sideC || sideB === sideC) {
  console.log("Isosceles Triangle");
} else {
  console.log("Scalene Triangle");
}
