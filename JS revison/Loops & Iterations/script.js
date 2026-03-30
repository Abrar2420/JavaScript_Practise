console.log("Loops and Iterations");

//? Sum of all even numbers between 1 and 100.

// let sum = 0;
// for (i = 0; i <= 100; i += 2) {
//   sum += i;
// }
// console.log(sum);

//? Print increasing number of *

// work but the variable will have to be initiated out of the loop stars
// let star = ``;
// for (let i = 1; i <= 5; i++) {
//   star += `*`;
//   console.log(star);
// }

// using nested loops

// for (let i = 0; i < 1; i++) {
//   stars = ``;
//   for (let i = 1; i <= 5; i++) {
//     stars += `*`;
//     console.log(stars);
//   }
// }

//? multiplication table using loop

// let num = 30;
// for (let i = 1; i <= 10; i++) {
//   let product;
//   product = num * i;
//   console.log(`${num} x ${i} = ${product}`);
// }

//? find the summation of all odd numbers between 1 to 500

// let count = 1;
// for (let i = 1; i <= 500; i++) {
//   if (i % 2 !== 0) {
//     count += i;
//     // console.log(count); if you want ot show the sum of every 2 numbers
//   }
// }
// console.log(count);

//? loop through 1-20 skipping multiples of 3

// for (let i = 1; i <= 20; i++) {
//   if (i % 3 === 0) continue;
//   console.log(i);
// }

//? reverse the digits of a given number using while loop

// let num = 1234567;
// let reversed = 0;

// while (num > 0) {
//   let digit = num % 10;
//   reversed = reversed * 10 + digit;
//   num = Math.floor(num / 10);
// }

// console.log(reversed);
