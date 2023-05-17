let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
];

console.log("Products sorted by price");
products.sort((a, b) => a.price - b.price);
console.log(products);

// Which candies costs less than $4.00?
console.log("Which candies costs less than $4.00?");
let cheapproducts = products.filter((p) => p.price < 4);
console.log(cheapproducts);

// Which candies has "M&M" its name?
console.log("Which candies has M&M its name?");
let mmproduct = products.filter((p) => p.product.includes("M&M"));
console.log(mmproduct);


// Do we carry "Swedish Fish"?
console.log("Do we carry Swedish Fish?");
let swedishFish = products.find((p) => p.product == "Swedish Fish");
const answer = swedishFish ? "Yes" : "No";
console.log(answer);