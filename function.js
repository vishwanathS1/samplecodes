// Function to calculate the area of a rectangle
function calculateRectangleArea(length, width) {
    return length * width;
}

// Function to find the maximum of two numbers
function findMax(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

// Function to display a greeting message
function greet(name) {
    return `Hello, ${name}!  Welcome to the program.`;
}

// Example usage of functions
//const rectangleArea = calculateRectangleArea(5, 8);
const maxNumber = findMax(12, 7);
const greetingMessage = greet("John");

// Output the results
console.log('Area of rectangle:', calculateRectangleArea(2,5));
console.log('Maximum of 12 and 7:', maxNumber);
console.log(greetingMessage);
