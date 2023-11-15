// String manipulation program
function stringManipulation() {
    // Concatenation
    const firstName = 'John';
    const lastName = 'Doe';
    const fullName = firstName + ' ' + lastName;
    console.log('Full Name:', fullName);

    // String length
    const message = 'Hello, World!';
    console.log('Length of the message:', message.length);

    // Accessing characters
    const firstCharacter = message[0];
    const lastCharacter = message[message.length - 1];
    console.log('First character:', firstCharacter);
    console.log('Last character:', lastCharacter);// Substring
    const substringExample = message.substring(0, 5);
    console.log('Substring:', substringExample);
const uppercaseMessage = message.toUpperCase();
    const lowercaseMessage = message.toLowerCase();
    console.log('Uppercase message:', uppercaseMessage);
    console.log('Lowercase message:', lowercaseMessage);

    // Replace
    const replacedMessage = message.replace('World', 'Universe');
    console.log('Replaced message:', replacedMessage);
}
stringManipulation();
