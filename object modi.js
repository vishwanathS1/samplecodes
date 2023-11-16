// Create an object called "book"
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Classic"
};

// Access and print the value of the "title" property using dot notation
console.log('Title:', book.title);

// Access and print the value of the "author" property using bracket notation
console.log('Author:', book['author']);

// Modify the value of the "year" property to 2020
book.year = 2020;

// Add a new property called "publisher" with the value "Scribner"
book.publisher = "Scribner";

// Print the updated value of the "year" property
console.log('Updated Year:', book.year);

// Print the value of the new "publisher" property
console.log('Publisher:', book.publisher);
