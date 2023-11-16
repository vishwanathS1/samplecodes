var hi =("hi");
alert(hi);
var numbers = [];
numbers.push(1, 2, 3);
console.log(numbers); 

console.log(numbers[1]); 

numbers.push(4);
console.log(numbers.length); 

numbers.shift(1);
console.log(numbers); 

var moreNumbers = [5, 6, 7];
var combinedNumbers = numbers.concat(moreNumbers);
console.log(combinedNumbers); 

var numbersString = combinedNumbers.join("-");
console.log(numbersString); 
