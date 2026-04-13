//& Global scope. fucntional scope, block scope

function conditonalLet() {
  if (true) {
    if (true) {
      let greet = "Hi";
    }
    console.log(greet); //? RegerenceError, because let (also const) is block scope and cannot be accessable outside of the if block
  }
}

// conditonalLet();

function conditonalVar() {
  if (true) {
    if (true) {
      var greet = "Hi";
    }
    // var greet = "hello";
    console.log(greet); //? prints besause var is functional scope so it is working outside of the if block, with in the fucntion
  }
}

// conditonalVar();

//& coding tasks

let user = "Alice";

function outer() {
  function inner() {
    console.log(user); //? prints: Bob, first it checks for user in its own fucntional scope, if not found, it goes to its parent scope (outer() functional scope here), checks there if user is there if yes takes it value and logs it, else goes to there parent scope
  }
  let user = "Bob";
  inner();
}

// outer();

//& Task - 2

let total = 0; //? Global, bad practice | because total is in global and it can be reassign with a diffirent value down the line, elemenating the purpose of the add fucntion

function add(num) {
  total += num;
}

add(5);
add(10);
// console.log(total);

//& task - 3

function parentFunc() {
  let greeting = "Welcome to our home";
  function childFucn() {
    console.log(greeting);
  }
  childFucn();
}

// parentFunc();

//& task - 4

function loop() {
  for (var i = 1; i <= 5; i++) {
    console.log(i);
  }

  //   i = 100;
  console.log(i); //? works with var, not with let. Explanaiton: line 8 & 20
}

// loop();

//& task - 5

function username() {
  let userName = "gamer123"; //? functional scope. can't be accessed outside of this fucntion
}

function greetUser() {
  console.log(`Welcome back ${userName}`); //? ReferenceError. no userName in it scope or it parect scope
}

// greetUser();

//& task - 6

//console.log(a); //? the concept of TDZ, ReferenceError. because JS encountered "let a" in its creational phase, its hoisted but not initialized instead put in TDZ. In executional phase JS encounters "console.log(a)" sees it is in TDZ and con't be accessed, hence referenceError.
let a = 10;

//& task - 7

function showAge() {
  let age = 25;
  console.log(age); //? age is accessable here
}

// console.log(age); //? no age variable in its scope

//& task - 8

let message = "Hello";

function outer() {
  let message = "Hi";

  function inner() {
    console.log(message);
  }

  inner();
}

//outer(); //? out "Hi", first it checks if message is there in its own functional scope (inner()), then it checks its parent fucntional scope (outer()), where message is defined.

//& task - 9

let x = "Global";

function outer() {
  let x = "Outer";

  function inner() {
    let x = "Inner";
    console.log(x);
  }

  inner();
}

//outer(); //? output "inner" as it find x defined in its imediate scope, and no need to check parent scope

//& task - 10

function counter() {
  let count = 0;
  return function () {
    count--;
    console.log(count);
  };
}

const reduce = counter(); //? here reduce = the returned function form counter()
reduce(); //? here we are calling the anonymous function inside counter()
reduce();
//? output: -1, -2 | as the anonymous fucntion is called it updates count, whcih it can find in its parent scope, hence count updated ot -1, called again, same stuf repeated count was -1 now updated to -2. As counter itself was never called again the count is never set back to 0.
