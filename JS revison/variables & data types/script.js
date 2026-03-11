console.log("hello variables and data types");

let name = "Abrar";
let age = 20;
let isStudent = true;
let favoriteProgrammingLanguage = "JavaScript";
age = 0;

console.log(`name: ${name}
age: ${age ? age : (age = 10)}
is a student: ${isStudent}
favorite programming language ${favoriteProgrammingLanguage}`);

let myObj1 = {
  fName: "Syed",
  lName: "Abrar",
};

let newObj1 = myObj1; //copied by reference

newObj1.fName = "John";

console.log(myObj1, newObj1);

let myObj2 = {
  fName: "Syed",
  lName: "Abrar",
};
let newObj2 = { ...myObj2 }; //copied by reference

newObj2.fName = "John";
console.log(myObj2, newObj2);
