const numberOfPhones = Number(prompt("Enter number of phones to be purchased: "));
const price = 119.95;
const priceWithTax = price + (price * 0.05);
console.log(numberOfPhones * priceWithTax);