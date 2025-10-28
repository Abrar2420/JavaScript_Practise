// ternary operator
// light/dark mode switcher with ternary (? :) operator

// let mode = prompt("enter 'l' for light mode or 'd' for dark mode:");

// mode == "l" //condition 1
//   ? alert("Light mode on.") // runs if condition 1 is true
//   : mode == "d" // condition 2
//   ? alert("Dark mode on.") // runs if condition 2 is true
//   : alert("Invalid input"); // runs if both conditon 1 & 2 are flase, as that will make it true by default.

// discount eligibility tester

// let discount = +prompt("Enter purchase amount:");

// discount >= 3000
//   ? alert(
//       `Congrats you ar eligible for 30% discount, you discounted amount is ${
//         (discount / 100) * 30
//       }TK`
//     )
//   : discount >= 2000
//   ? alert(
//       `Congrats you are eligible for 20% discount, you discounted amount is ${
//         (discount / 100) * 20
//       }TK`
//     )
//   : discount >= 1000
//   ? alert(
//       `Congrats you are eligible for 10% discount, you discounted amount is ${
//         (discount / 100) * 10
//       }TK`
//     )
//   : alert(`You are not eligible for any discount`);

// if else statement

// age verifier

// let age = +prompt("Enter you age:");

// if (age >= 18) {
//   alert("You can drive"); // runs if the condition is true
// } else {
//   alert("You can't drive"); // rens if none of the if conditions are true
// }

// // // simple calculator

// let operator = prompt("Enter an operator (+, -, * or, /):");
// let num1 = +prompt("Enter the first number:");
// let num2 = +prompt("Enter the second number:");

// if (operator == "+") {
//   alert(`The answer is: ${num1 + num2}`);
// } else if (operator == "-") {
//   alert(`The answer is: ${num1 - num2}`);
// } else if (operator == "*") {
//   alert(`The answer is: ${num1 * num2}`);
// } else if (operator == "/") {
//   alert(`The answer is: ${num1 / num2}`);
// } else {
//   alert(`Invalid input`);
// }

// // for loop

// // multiplication table

// let num = 5;
// // i = 0 works as a loop counter; condition; increment/decrement;
// for (i = 1; i <= 10; i++) {
//   console.log(`${num} x ${i} = ${num * i}`); // runs everytime the loop runs
// }

// // calculates the sum of number

// let sumN = 5;
// let add = 0;

// for (i = 1; i <= sumN; i++) {
//   add = add + i;
//   console.log(add);
// }

// while loop

// print even numbers

// let evenN = 20;
// let i = 2;
// while (i <= evenN) { // takes the condition for the loop to run when the condition becomes false loop stops
//   console.log(i); // these statements run every time the loop runs
//   i = i + 2;
// }

// guess the number

// let randomNumber = 5;
// let guess = +prompt("Enter you number:");
// while (randomNumber != guess) {
//   if (guess > randomNumber) {
//     alert("guess a smaller number");
//     guess = +prompt("Enter your number:");
//   } else if (guess < randomNumber) {
//     alert("guess a biggier number");
//     guess = +prompt("Enter your number:");
//   } else {
//     alert("invalid input");
//     guess = +prompt("Enter your number:");
//   }
// }

// alert("you got the correct number");

// switch case

// trafic color describer

let color = prompt("Enter a trafic color:");

switch (
  color //takes a single expression, doesn't take conditons
) {
  case "red": // if the case matches the experssion the code runs for that case
    alert("Vehicles must stop completely.");
    break; // all casses will run if break; is not given
  case "yellow":
    alert("It means the light is about to change — prepare to stop.");
    break;
  case "green":
    alert("You may go if the road is clear.");
    break;
  default: // works kind of like else
    alert("not a valid traffic color");
}

// simple calculator using switch

let num1 = +prompt("Enter the first number:");
let operator = prompt("Enter an operator (+, -, * or, /):");
let num2 = +prompt("Enter the second number:");

switch (operator) {
  case "+":
    alert(`The answer is: ${num1 + num2}`);
    break;
  case "-":
    alert(`The answer is: ${num1 - num2}`);
    break;
  case "*":
    alert(`The answer is: ${num1 * num2}`);
    break;
  case "/":
    alert(`The answer is: ${num1 + num2}`);
    break;
  default:
    alert(`Invalid input`);
}
