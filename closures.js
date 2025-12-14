//~ JS Function Closures

// Closures helps maniputale variable inside a function every time the function is called, without takeing the variable to its original state
// It achives that by returning a function (which hold all assignments done on the variable) inside the main function, and the variable is created in the mian function above the returned function.
const addMoney = () => {
  let money = 0;
  return (deposit) => {
    let total = (money += deposit);
    return console.log(total);
  };
};

const add = addMoney();
add(500);
add(50);
add(50);
add(50);
add(50);

const counter = () => {
  let count = 0;
  return () => {
    count++;
    return console.log(count);
  };
};

let addCount = counter();
addCount();
addCount();
addCount();
addCount();
