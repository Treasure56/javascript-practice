const name = "Treasure";
const num = 20;
const countries = ["nigeria", "spain", "china"];
const isLoading = true;
const data = {
  name: "mira",
  age: 16,
  gender: "female",
  isAdult: false,
};

console.log(name);  
console.log(num);
console.log(countries);
console.log(isLoading);
console.log(data);

console.log("----------------------------------------");
console.log("----------------------------------------");

// using let to create five variables

let age = 16;
let message = "mira is 16 years old";
let courses = ["Javascript", "ui/ux", "devops"];
let isAdult = false;
let result = {
  name: "amira",
  birthday: "12 june 2025",
  age: 2,
};

//  reasign the let variables

age = 13; // "number"
message = "Something went wrong";
courses = ["nigeria", "japan"];
isAdult = true;
result = {
  name: "Tee",
  birthday: "10 july 2020",
  age: "5",
};

console.log(age);
console.log(message);
console.log(typeof courses);
console.log(isAdult);
console.log(result);



const numbers = ["1", "2", "3", "4"];
const date = new Date();

console.log(numbers instanceof Array); 
console.log(numbers instanceof Object);
console.log(date instanceof Date); 

const x = null;
console.log(typeof x)

const person = { "full name": 'Tee', birthday: '10 july 2020', "age": '5' }
console.log(person["age"]);

const _numbers = {
  0: "1",
  1: "2",
  2: "3",
  3: "4",
};
console.log(_numbers[0]);
