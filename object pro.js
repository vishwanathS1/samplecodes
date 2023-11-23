
// Create an object:
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "EN" 
}

// Change a property
Object.defineProperty(person, "language", {value:"NO"})
document.getElementById("demo").innerHTML = person.language;

// adding a property
const person1 = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue"
  }
  
  person.nationality = "English";
  document.getElementById("demo").innerHTML = person.firstname + " is " + person.nationality + ".";
  