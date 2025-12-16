//~ Reference Errors
// it occurs when use a reference of a variable that does not exist.

let x = 5;
try {
  x = y + x;
} catch (err) {
  console.log(err); // logs reference error
}

//~ JavaScript Type Errors
// A Type Error occurs when a value is of the wrong type or an operation is invalid on that type.

let num = 5;
try {
  num.toUpperCase();
} catch (err) {
  console.log(err); // logs Type error,
}

//~ JavaScript Range Errors
//A RangeError occurs when a value is out of its valid range.

num = 1;

try {
  num.toPrecision(500); // A number cannot have 500 significant digits
} catch (err) {
  console.log(err);

  let text = err.name;
  console.log(text);
}

//~ JavaScript URI Errors (Uniform Resource Identifier Errors)
// An URIError occurs if you use illegal characters in a URI function:

try {
  decodeURI("%%%"); // You cannot URI decode percent signs
} catch (err) {
  console.log(err);
}

//~ JavaScript Syntax Errors
// A Syntax Error occurs when the code violates JavaScript's grammar rules.

// wrong syntax, not catchable by try catch, as they happen before runtime
// let name = "Abrar;
// console.log(name);

//~ JavaScript Silent Errors
// silent error doest not throw error or, terminates the code.
// the code will simply not do the intended work, as there is something wrong
// the code will run normally

let result = "Not Active.";
let isActive = false;

// ❌ Assignment, not comparison
if ((isActive = true)) {
  let result = "Active!";
  console.log(result);
}

//~ custom errors

// creating custom errors using functions
function ValidationError(message) {
  this.name = "ValidationError";
  this.message = message;
}
// creating a new object, with the prototype Error.prototype
// .& assigning it to ValidationError.prototype
ValidationError.prototype = Object.create(Error.prototype);
// setting the constructor reference
ValidationError.prototype.constructor = ValidationError;

function SillyError(message) {
  this.name = "sillyError";
  this.message = message;
}
ValidationError.prototype = Object.create(Error.prototype);
ValidationError.prototype.constructor = ValidationError;

function MathError(message) {
  this.name = "MathError";
  this.message = message;
}
ValidationError.prototype = Object.create(Error.prototype);
ValidationError.prototype.constructor = ValidationError;

try {
  //   throw new ValidationError("Password too short");
  //   throw new SillyError("There is a silly mistake in the code");
  throw new MathError("There is a mathematical error in code");
} catch (err) {
  if (err instanceof ValidationError) {
    console.log("Validation issue:", err.message);
  } else if (err instanceof SillyError) {
    console.log("Validation issue:", err.message);
  } else if (err instanceof MathError) {
    console.log("Validation issue:", err.message);
  } else {
    console.log("Unknown error");
  }
}
