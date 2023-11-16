// Create an object with a method that uses the "this" keyword
const myObject = {
    message: "Hello, ",
    greet: function (name) {
        console.log(this.message + name);
    }
};

// Call the greet method with the "this" context
myObject.greet("John"); // Output: Hello, John

// Create an array of names
const names = ["Alice", "Bob", "Charlie"];

// Use forEach to iterate over the array and call the greet method
names.forEach(myObject.greet, myObject);

// Using forEach with an arrow function
names.forEach(name => myObject.greet(name));

// Using forEach with a regular function
names.forEach(function (name) {
    myObject.greet(name);
});
