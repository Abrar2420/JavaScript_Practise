// object.assign

const target = { a: 1, b: 2 };
const source1 = { e: 5, f: 6 };
const source2 = { c: 3, d: 4 };

// object.assign takes a target object,
// and other other objects, which are then assigned (cancatinated) to the target object,
// target is reassigned with the values of target, source1, source2
// const assignedTarget = Object.assign(target, source1, source2);

// console.log(target);
// console.log(assignedTarget);

// propertyIsEnumerable  -------------------------------------------------------

// it checks whether the property is the objects own property
console.log(target.propertyIsEnumerable("a")); // true
console.log(target.propertyIsEnumerable("length")); // flase

// get  -------------------------------------------------------

const person = {
  firstName: "Jhon",
  lastName: "Doe",
  language: "en",
  country: "",
  // a get method is returning the value for language
  get lang() {
    return this.language;
  },
  // a set method is setting the value for language, which can be seen by get or the property itself
  set place(con) {
    this.country = con;
  },
};

person.place = "Bangaladesh";

console.log(person.lang, person.country);

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   language: "en",
//   get lang() {
//     return this.language;
//   }
// };

// Object.entries --------------------------------------------------------------

const entries = {
  one: 1,
  two: 2,
  three: 3,
};

// converts each property to an array -------------------------------------------------
const arrayOfObj = Object.entries(entries); // returns 3 arrays

const convetToArray = arrayOfObj.flat(); // converts all of the array to a single array
console.log(convetToArray);

// Object.freeze ----------------------------------------------------------------------
Object.freeze(entries); // no changes or updates can be made, throws an TypeError
// entries.four = 4;
// console.log(entries);

console.log(Object.isFrozen(entries)); // returns true/false, base on if the object is frozen or not.

// getOwnPropertyDescriptor ---------------------------------------------------------------

// returns the property descriptor of an objects property
let descriptor = Object.getOwnPropertyDescriptor(person, "firstName");

// returns the descriptors for all the properties of an object
let allDescriptor = Object.getOwnPropertyDescriptors(person);

// returns the names for the object
// let name = Object.getOwnPropertyNames(person);

// console.log(name);
console.log(allDescriptor);
console.log(
  descriptor.value,
  descriptor.writable,
  descriptor.enumerable,
  descriptor.configurable
);

// groupBy --------------------------------------------------------------------------

const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
  { name: "apple", type: "fruit", quantity: 54 },
  { name: "lettus", type: "vegatables", quantity: 54 },
];

// Object.groupBy returns groups in an array
// it takes an callback, and groups according to the callback
// i.e. the callbacks getting the type, it will group all the object cantianing the same type in an object
const name = Object.groupBy(inventory, (item) => item.name);
const type = Object.groupBy(inventory, (item) => item.type);
const quantity = Object.groupBy(inventory, (item) => item.quantity);
console.log(name);
console.log(type);
console.log(quantity);

//  it can be used to groups of data from an array of object. Like bellow
const stock = Object.groupBy(inventory, ({ quantity }) => {
  if (quantity < 10) {
    return "low";
  } else if (quantity < 40) {
    return "sufficient";
  } else {
    return "plenty";
  }
});

const stockLeft = stock.low.map((item) => {
  return item.quantity;
});
console.log(stockLeft);
console.log("Stock left less then 10:", stock.low);
console.log("Stock left less then 40:", stock.sufficient);
console.log("Stock is more then 40:", stock.plenty);
