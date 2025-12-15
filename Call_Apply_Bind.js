//~ JS Call method
// call() can be used to invoke a function with an object as its parameter

const person = {
  fullName: function (a, b, c, d, e) {
    return `${this.firstName} ${this.LastName} ID: ${a}, ${b}, ${c}, ${d}, ${e} `;
  },
};

const person1 = {
  firstName: "Umar",
  LastName: "Faruk",
};
const person2 = {
  firstName: "Jhon",
  LastName: "Doe",
};
const person3 = {
  firstName: "Marry",
  LastName: "Doe",
};

console.log(person.fullName.call(person1, 12));
console.log(person.fullName.call(person2, 6));
console.log(person.fullName.call(person3, 22));

//~ apply() method
// apply method is similar to call()
// The Difference Between call() and apply()
// The call() method takes arguments separately.
// The apply() method takes arguments as an array.

// it is handy when we have an array we would like to pass as an argument
const applyArguments1 = [22, 45, 6, 20, 15];
const applyArguments2 = [99, 85, 12, 56, 155];
const applyArguments3 = [2, 405, 62, 202, 5];
console.log(person.fullName.apply(person1, applyArguments1));
console.log(person.fullName.apply(person2, applyArguments2));
console.log(person.fullName.apply(person3, applyArguments3));

// Math.max don't work on arrays is JS,
// .apply can be used as it takes an array as argument,
// and Math.max is a method,
// and all methods are functions and we can use apply to it.
console.log(Math.max(1, 2, 3)); // output 3

console.log(Math.max([1, 2, 3])); // output NaN because we are passing an array

console.log(Math.max.apply(null, [1, 2, 3])); // output 3

//~ JS apply() method
// with bind() method an object can borrow a method form another onject

const user = {
  firstName: "Matt",
  lastName: "Henry",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

const member = {
  firstName: "Joe",
  lastName: "Root",
};
let borrowedMethod = user.fullName.bind(member);
console.log(borrowedMethod());
