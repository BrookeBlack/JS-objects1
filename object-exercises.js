 'use strict';
// Exercise 1: Create an object representing a car with properties: make, model, year.
let car = {
make = "Ford";
model = "F250";
year = 2000;  
}
// Exercise 2: Access and log the 'model' property from the car object.
console.log(car.model);
// Exercise 3: Add a new property 'color' to the car object and assign it a value.
car.color = "white";
// Exercise 4: Update the 'year' property of the car object.
car.year = 2001
// Exercise 5: Create a method inside the car object that logs a sentence about the car.
function carSen() {
console.log(`My ${make} is a ${model} that is a ${year} model and it is ${color}`);
}
// Exercise 6: Create an object representing a person with properties: name, age, and address (as a nested object).
let person = {
firstName = "Anne";
age = 30;
address = "123 North Ave."; 
}
// Exercise 7: Access the street from the address property inside the person object.
console.log(person.address);
// Exercise 8: Add a method to the person object that returns their full name and age.
console.log(person.name + person.age);
// Exercise 9: Create an array of three book objects, each with properties: title, author, and pages.
var myArray = [["Lord of the Rings", "J.R. Tolkien", 500],["Twilight", "Stephenie Meyer", 350], ["Vampire Diaries", "L.J. Smith", 200]];
// Exercise 10: Log the title of the second book in the array.
console.log(myArray[1][0]);
