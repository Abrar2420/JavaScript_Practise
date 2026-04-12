//? fucntiont to convert celsius to fahrenheit

function tempFahrenheit(tempCelsius) {
  let temp = (tempCelsius * 9) / 5 + 32;
  return temp;
}

// console.log(tempFahrenheit(33));

//? maximum of two number

function findMax(num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} is the larger number`);
  } else if (num2 > num1) {
    console.log(`${num2} is the larger number`);
  } else {
    console.log(`${num1} and ${num2} are equal`);
  }
}

// findMax(10, 10);

//? Check if a string is Palindrome
function isPalindrome(str) {
  let string = str.toLowerCase();
  let flipedStr = string.split("").reverse().join("");
  //   console.log(string);

  if (string === flipedStr) {
    console.log(`${str} is Palindrome`);
  } else {
    console.log(`${str} is not Palindrome`);
  }
}

// isPalindrome("Pop");

//? Factorial of n

function factorial(n) {
  let factorial = 1;
  while (n > 0) {
    factorial = factorial * n;
    n--;
  }
  console.log(factorial);
}

// factorial(52);

//? capitalize the first letter of each word

function capitalizeWords(sentence = "hello good morning") {
  let a = sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  console.log(a);
}

// capitalizeWords();

//? Use IIFE

// (function greet(name) {
//   console.log("hello " + name);
// })("JavaScript");
// greet("JavaScript");

//? simple Callback Function

function greeting(name, greet) {}

const greet = (name) => {
  console.log("Good Evening! " + name);
};

greeting("Abrar", greet);
