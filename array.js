// // JS array methods

let fruits = ["Banana", "Orange", "Apple", "Mango"];
// .legth --> returns the length of a array, counts form 1

let size = fruits.length;
console.log(size); // output = 4
fruits.length = 2; // changes the arrays length
console.log(fruits); // output = [ 'Banana', 'Orange' ]

// .toString --> returns the elements of an array as a comma separated string.

console.log(fruits.toString());

// .at(n) --> fetches the element on the nth positon, [] does the same
console.log(fruits.at(2)); // outpu = apple
console.log(fruits[2]); // outpu = apple

// .join() joins all the elements into a string, you can specify the seperator
console.log(fruits.join(" is healthy, "));
console.log(fruits.join(" * "));

fruits.pop(); // .pop() removes the last element
console.log(fruits);

fruits.push("kiwi"); // .push() adds after the last element
console.log(fruits);

fruits.shift(); // .shift() removes the first element
console.log(fruits);

fruits.unshift("kiwi"); // .unshift() adds after at the bigining
console.log(fruits);

fruits[0] = "kiwi"; // assigns the value at the mentioned index
console.log(fruits);
fruits[fruits.length] = "Kiwi"; // assigns the value at the end as length is always 1 more then index
console.log(fruits);

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

// concats all the array given to its array, returns a new array
console.log(fruits.concat(myBoys, myGirls));
console.log(fruits.concat(myBoys, myGirls, "Harry")); // also values

const letter = ["a", "b", "c", "d", "e", "f", "g", "h"];

let letter1 = letter.copyWithin(0, 3); // copy all elements from index 3 till end to index 0,
//keeps the remaining length after pasting
console.log(letter1);

let letter2 = letter.copyWithin(0, 3, 4); // copy the elements from the start of index 3 till start of index 4,
//keeps the remaining length after pasting
console.log(letter2);

const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newArr = myArr.flat(); // will concat all the array in and make a new array
console.log(newArr);

fruits.splice(1, 1, "pineapple", "jackfruit");
// (1), this is where i want to do the change
// (1), this states how many elements i want to remove
// ("pineapple", "jackfruit") this is what i want to add
console.log(fruits);

let newFruits = fruits.toSpliced(1, 4, "cherry"); // works like splice, but returns a new array
console.log(newFruits); // changed array
console.log(fruits); // original is unchanged

fruits.push("pineapple", "cherry", "jackfruit");
let newSlice = fruits.slice(1, -2); // slices form including index 1 till -2 form the end
console.log(newSlice);

// JS array seardh methods

const beasts = ["ant", "bison", "camel", "duck", "bison"];

console.log(beasts.indexOf("bison")); // returns 1 as the first "bison" is there
console.log(beasts.indexOf("bison", 2)); // starts looking after index 2 returns 4 as the first "bison" after 2 is there

console.log(fruits.includes("Mango")); // returns boolean

const array = [5, 12, 8, 130, 44];

const found = array.find((element) => element > 10); // will check which is the first value that satisfies the conditon

console.log(found);
// Expected output: 12, as it is first which satisfies the condition although 130, & 44 are also > 10

const found2 = array.findIndex((element) => element > 10); // will check which is the first value that satisfies the conditon and it will return its index

console.log(found2);
// Expected output: [1], as it is first which satisfies the condition although [3], & [4] are also > 10

const found3 = array.findLast((element) => element > 10); // will check which is the first value from the end that satisfies the conditon

console.log(found3);
// Expected output: 44, as it is first when checking form the end which satisfies the condition although 130, & 12 are also > 10

const found4 = array.findLastIndex((element) => element > 10); // will check which is the first value from the end that satisfies the conditon and it will return its index

console.log(found4);
// Expected output: [4], as it is first when checking form the end which satisfies the condition although [3], & [1] are also > 10
