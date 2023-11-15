// Function to calculate the total price
function calculatePrice(quantity, unitPrice) {
    // Function scope variable
    const taxRate = 0.08;

    // Calculate total price
    const subtotal = quantity * unitPrice;
    const tax = subtotal * taxRate;
    const totalPrice = subtotal + tax;

    // Return the total price
    return totalPrice;
}

// Example usage of the calculatePrice function
const totalPrice1 = calculatePrice(5, 10);
const totalPrice2 = calculatePrice(10, 15);
const totalPrice3 = calculatePrice(8, 12);

// Output the results
console.log('Total price for 5 items at $10 each:', totalPrice1);
console.log('Total price for 10 items at $15 each:', totalPrice2);
console.log('Total price for 8 items at $12 each:', totalPrice3);

// Attempting to access the taxRate variable outside the function scope will result in an error
// console.log('Tax rate outside the function:', taxRate); // Uncommenting this line will cause an error
