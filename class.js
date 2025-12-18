//~ JS class

class Dog {
  // Class keyword, + a name usually starting with capital letter
  // the constructor sets up the object
  // the canstructor will run automatically the moment we create a new Dog
  constructor(name, breed) {
    // this is the placeholder for the future object.
    // give "this" specific dog a name
    this.name = name;
    this.breed = breed;
  }
  // adding methods (actions)

  // A method
  bark() {
    console.log(`${this.name} says: Woof!`);
  }
}

//& the new keyword
// it will give us a new object, which we are making with the contructor, the calss Dog

const myDog = new Dog("Buddy", "Golden Retriever");
const yourDog = new Dog("Max", "Beagle");

console.log(myDog.name);
console.log(yourDog.name);

myDog.bark();

//& inheritence the "exencd" keyword
// we use extend to borrow everything form a parent class

class ServiceDog extends Dog {
  constructor(name, breed, task) {
    super(name, breed); // super calls the parent Dog constructor
    this.task = task;
  }
  doWork() {
    console.log(`${this.name} is helping with ${this.task}.`);
  }
}

const guideDog = new ServiceDog("Luna", "Labrador", "guiding");

guideDog.bark();
guideDog.doWork();

class ShoppingList {
  constructor(items) {
    this.items = items;
  }
  formatList() {
    // we are creating a method that enabling us to add logic to an already existing method join()
    return this.items.map((item) => `- ${item}`).join("\n");
  }
}

const myGrocery = new ShoppingList(["milk", "apple", "eggs", "bread"]);
console.log(myGrocery.formatList());

/*
  ===========================================================
  JS CLASS CHEAT SHEET
  ===========================================================
  & FEATURE     | DESCRIPTION
  -----------------------------------------------------------
  class         | The keyword that declares the blueprint.
  constructor() | The setup function; runs once on "new".
  this          | Refers to the specific object being built.
  new           | The command that triggers the constructor.
  methods       | Functions inside the class (actions).
  extends       | Connects a child class to a parent class.
  super()       | Passes data from child up to the parent.
  ===========================================================
*/
