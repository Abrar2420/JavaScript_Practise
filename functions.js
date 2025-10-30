let test = "This is a test variable";

let priceInput = +prompt("Enter the Price:");
let quantityInput = +prompt("Enter the Quantity:");

function totalPrice(price, quantity) {
  return price * quantity;
}

function addVat(price, quantity, vatPercentage) {
  let basePrice = totalPrice(price, quantity);
  let vat = (basePrice / 100) * vatPercentage;
  return basePrice + vat;
}

function addDiscount(price, quantity, vatPercentage, discountPercentage) {
  let priceWithVat = addVat(price, quantity, vatPercentage);
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
  console.log(`
              ---------------- Customer Invoice ----------------
                    total price : ${total} TK
                    vat added   : 15 %
                    -----------------------------------
                    total after vat : ${withVat} TK
                    discount given  : 20 %
                    -----------------------------------
                    sub total       : ${withDiscount} TK
    `);
}

showBill(priceInput, quantityInput, 15, 20);
