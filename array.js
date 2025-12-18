// Array is a javascript data type used to store multiple values in a single variable
// Arrays are zero-indexed: the first element is at index 0, the second at index 1, and so on.
// Arrays are mutable: you can change the value of an element in the array.
// Arrays are dynamic: you can add and remove elements from the array.
// Arrays are iterable: you can loop through the elements of the array using a for loop.


// common cases in array
// 1. to store data
const fruits = ["apple", "banana", "orange", "grape"];
console.log(fruits); // Output: ["apple", "banana", "orange", "grape"]

// 2. to loop through the elements of an array
for(let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// when you should not use array
// 1. when you need to store key-value pairs, use an object instead
const person = {
  name: "John",
  age: 30,
  city: "New York"
};
console.log(person); // Output: {name: "John", age: 30, city: "New York"}

// Note: if you have a list of key-value pairs, you can use an array of objects
const people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Bob", age: 40 }
];
console.log(people); 

// 2. when you need to store unique values, use a Set instead
const uniqueFruits = new Set(["apple", "banana", "orange", "apple"]);
console.log(uniqueFruits); // Output: Set(3) {"apple", "banana", "orange"}

// array distructuring

const colors = ["red", "green", "blue"];
const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor);

// Skipping Values in Array Destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, , , last] = numbers;
console.log(first); // Output: 1
console.log(last); // Output: 5

// Default Values in Array Destructuring
const points = [10];
const [x = 0, y = 0] = points;
console.log(x);

const [a, b, c = "black"] = ["white", "gray"];
console.log(b); 

// Array Modification

// Adding Elements from the End
 const animals = ["cat", "dog"];
  animals.push("elephant"); // adds to the end
  console.log(animals); // Output: ["cat", "dog", "elephant"]


  // adding from start
   const animalss = ["cat", "dog"];
  animalss.unshift("elephant"); // adds to the start
  console.log(animalss); // Output: [ "elephant", "cat", "dog", ]

