var fruits = ["apple", "banana", "orange", "mango"];
fruits.push("grape");
console.log(fruits);  

fruits.shift();
console.log(fruits); 

var citrusFruits = fruits.slice(1, 3);
console.log(citrusFruits); 

var uppercasedFruits = fruits.map(function (fruit) {
  return fruit.toUpperCase();
});
console.log(uppercasedFruits);

var includesBanana = fruits.includes("banana");
console.log(includesBanana); 

var bananaIndex = fruits.indexOf("banana");
console.log(bananaIndex); 

var numbers = [1, 2, 3, 4, 5];
var doubleNumbers = numbers.map(function (number) {
  return number * 2;
});
console.log(doubleNumbers); 
var filteredNumbers = numbers.filter(function (number) {
  return number <= 5;
});
console.log(filteredNumbers); 
