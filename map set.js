// Using map and set in a program

// Creating a map to store user information
const userMap = new Map();

// Adding users to the map
userMap.set('vishwa', { name: 'vishwa', age: 22, email: 'v@example.com' });
userMap.set('Smith', { name: ' Smith', age: 20, email: 'k@example.com' });

// Displaying user information using map
console.log('User Information from Map:');
userMap.forEach((userInfo, username) => {
    console.log(`${username}: ${userInfo.name}, ${userInfo.age} years old, Email: ${userInfo.email}`);
});

// Creating a set to store unique numbers
const numberSet = new Set();

// Adding numbers to the set
numberSet.add(10);
numberSet.add(20);
numberSet.add(30);
numberSet.add(10); // Adding a duplicate, which will be ignored

// Displaying unique numbers using set
console.log('\nUnique Numbers from Set:');
numberSet.forEach(number => {
    console.log(number);
});
