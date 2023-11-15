// Type checking and conversion program
function typeCheckingAndConversion() {
    // Typeof operator
    const numberVar = 42;
    const stringVar = 'Hello, World!';
    const booleanVar = true;

    console.log('Type of numberVar:', typeof numberVar);
    console.log('Type of stringVar:', typeof stringVar);
    console.log('Type of booleanVar:', typeof booleanVar);

    // Type conversion
    const numString = '123';
    const parsedNumber = parseInt(numString);
    const floatString = '45.67';
    const parsedFloat = parseFloat(floatString);

    console.log('Parsed number from string:', parsedNumber);
    console.log('Parsed float from string:', parsedFloat);

    const booleanString = 'true';
    const parsedBoolean = Boolean(booleanString);

    console.log('Parsed boolean from string:', parsedBoolean);
}

// Example usage
typeCheckingAndConversion();
