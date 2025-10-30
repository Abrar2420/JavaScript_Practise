// function prctice
// functions for invoice printing

let priceInput = +prompt("Enter the Price:");
let quantityInput = +prompt("Enter the Quantity:");

function totalPrice(price, quantity) {
  // this function returns the total price
  // by multipling price with qunatity
  return price * quantity;
}

function addVat(price, quantity, vatPercentage) {
  let basePrice = totalPrice(price, quantity); //basePrice stores the returned value from totalPrice function.
  // this function returns price with vat
  let vat = (basePrice / 100) * vatPercentage;
  return basePrice + vat;
}

function addDiscount(price, quantity, vatPercentage, discountPercentage) {
  let priceWithVat = addVat(price, quantity, vatPercentage); //priceWithVat stores the returned value from addVat function.
  // this function re
  let discount = (priceWithVat / 100) * discountPercentage;
  return priceWithVat - discount;
}

function showBill(price, quantity, vatPercentage, discountPercentage) {
  let total = totalPrice(price, quantity);
  let withVat = addVat(price, quantity, vatPercentage);
  let withDiscount = addDiscount(
    price,
    quantity,
    vatPercentage,
    discountPercentage
  );
  // prints the invoice using the returned valuse form each function
  // which are stored in there respective variables in this function
  console.log(`
              ---------------- Customer Invoice ----------------
                    total quantity  : ${quantity}
                    item pirce      : ${price}
                    -----------------------------------
                    total price     : ${total} TK
                    vat added       : 15 %
                    -----------------------------------
                    total after vat : ${withVat} TK
                    discount given  : 20 %
                    -----------------------------------
                    sub total       : ${withDiscount} TK

                    ** Thank you for shoping with us **
    `);
}

showBill(priceInput, quantityInput, 15, 20); // runs the function with the parameter provided
// this function calls other functions to fetch their returned value.

anonymous function practice
Invoice printing using a single function

let priceInput = +prompt("Enter the Price:");
let quantityInput = +prompt("Enter the Quantity:");

// this function takes 4 parameters for calculating the subTotal
let showBill = function (price, quantity, vatPercentage, discountPercentage) {
  let totalPrice = price * quantity; // total price of for the privided quantity
  let calcVat = (totalPrice / 100) * vatPercentage; // calculates the vat amount
  let addVat = calcVat + totalPrice; // total after adding vat
  let calcDiscount = (addVat / 100) * discountPercentage; //calculates the discount amount
  let addDiscount = addVat - calcDiscount; // total after subtracting discount amount

  console.log(`
              ---------------- Customer Invoice ----------------
                    total quantity  : ${quantity}
                    item pirce      : ${price}
                    -----------------------------------
                    total price     : ${totalPrice} TK
                    vat added       : ${vatPercentage} %
                    -----------------------------------
                    total after vat : ${addVat} TK
                    discount given  : ${discountPercentage} %
                    -----------------------------------
                    sub total       : ${addDiscount} TK

                    ** Thank you for shoping with us **
    `);
};

//calls the function stored in the showBill variable
console.log(showBill(priceInput, quantityInput, 15, 20));
