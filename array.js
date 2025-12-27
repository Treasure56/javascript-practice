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

  // deleting from end
  const animalsss = ["cat", "dog", "elephant"];
  animalsss.pop(); // removes from the end
  console.log(animalsss); // Output: [ "cat", "dog" ]

  // deleting from start
  const animalssss = ["cat", "dog", "elephant"];
  animalssss.shift(); // removes from the start
  console.log(animalssss); // Output: [ "dog", "elephant" ]

  // removing element at index 1
  animals.splice(1, 1); // removes 1 element at index 1
  console.log(animals); // Output: ["cat", "elephant"]


  // Update element
  animals[0] = "lion"; // updates element at index 0
  console.log(animals); // Output: ["lion", "elephant"]

  // using splice to update element
  animals.splice(1, 1, "tiger"); // updates 1 element at index 1
  console.log(animals); // Output: ["lion", "tiger"]

  for(let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
 // Adding element an array from the end
const fruitss = ["Orange", "banana", "apple"];
fruitss.push("pear");
console.log(fruitss);

// Removing element an array from the end
fruitss.pop();
console.log(fruitss);

console.log("Removing element from the start");

// removeing element from the start
fruitss.shift();
console.log(fruitss);

fruitss.unshift("Mango", "Pineapple", "Grapes");
console.log(fruitss);

console.log("----------------------Mapping through an array---------------------------");
// mapping through an array
fruitss.map((fruit) => {
  console.log(fruit);
});


const numberss = [1, 2, 3, 4, 5];
numbers.map((number) => {
  console.log(number * 2);
});

console.log("--------------------fiter-------------------------");
// filter

const xy = [10, 15, 20, 25, 30]; 
xy.filter((num) => {
  if(num > 20) {
    console.log(num);
  }
});

console.log("--------------------find-------------------------");
// find
const ab = [5, 10, 15, 20, 25];
const found = ab.find((num) => num > 15);
console.log(found); // Output: 20

console.log("--------------------forEach-------------------------");
//to loop through an array
const colorss = ["red", "green", "blue"];
colorss.forEach((color) => {
  console.log(color);
}); // Output: red green blue

const incluedes = fruitss.includes("banana");
console.log(incluedes); // Output: true

const ax = ["apple", "banana", "orange"];
const sliceFruits = ax.slice(1, 3);
console.log(sliceFruits); // Output: ["banana", "orange"]

const bx = ["apple", "banana", "orange", "grape"];
const splicedFruits = bx.splice(1, 2, "kiwi", "mango");
console.log(bx); // Output: ["apple", "kiwi", "mango", "grape"]

const ani = ["cat", "dog", "elephant"];
ani.splice(1, 1, "lion");  // explains that at index 1, remove 1 element and add "lion"
console.log(ani);

// const arr = ["a", "b", "c", "d"];
// const newArr = arr.slice(1, 3);
// console.log(newArr);
// console.log(arr);

const colorsss = ["red", "blue", "yellow"]

const [firstColors, secondColors, thirdColors, fourthColors] = colorsss;
console.log(fourthColors) // red
// const a = [1,2, 3];
// // if i print number it will show 1,2,0
// a[2] = 0;
// console.log(a);

const arr = [10, 20, 30];
arr.unshift(5);
console.log(arr);

// slice method is used to extract a part of an array and returns the extracted part in a new array

const fruitsss = ["apple", "banana", "orange"];
const citrusFruits = fruitsss.slice(1, 2); 
console.log(citrusFruits); // Output: []

const veggies = ["carrot", "broccoli", "spinach", "potato"];
veggies.map((veggie) => {
  console.log(veggie);
});

// illustrate map method
const nums = [1, 2, 3, 4, 5];
const squaredNums = nums.find((num) => num * num);
console.log(squaredNums); // Output: [1, 4, 9, 16, 25]


const users = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Mary", age: 22 },
  { id: 3, name: "Paul", age: 30 }
];

const userNames = users.map((user) => user.name);
console.log(userNames);

const getUserNames = users.map((user) => {
  return user.name;
});
console.log(getUserNames);

//to find the user whose id is 2
const user = users.find((user) => user.id === 2);
console.log(user);

// update paul's age to 31
const updatePaulAge = users.find((user) => user.id === 3);
updatePaulAge.age = 31;

console.log(updatePaulAge);

console.log("------------------filter method-------------------");

// check if a user is older than 30

const olderUsers = users.filter((user) => user.age > 30);
console.log(olderUsers);

console.log("------------------sort method-------------------");

// sort users from youngest to olderest
const sortedUsers = users.sort((a, b) => a.age - b.age);
console.log(sortedUsers);

console.log("------------------Chaining array methods-------------------");

// creating new array of users containing only names of users  who are 30 years old and above
const namesOfOlderUsers = users
  .filter((user) => user.age >= 30)
  .map((user) => user.name);
console.log(namesOfOlderUsers);

console.log("------------------push method-------------------");

// to add a new user to the users array

users.push({id: 4, name: "Lucy", age: 28});
console.log(users);


const changeJohnsAge = users.find(user => user.name === "John");
changeJohnsAge.age = 26;
console.log(changeJohnsAge);

 const isAlice = users.includes(user => user.name === "Alice");
console.log(isAlice);













