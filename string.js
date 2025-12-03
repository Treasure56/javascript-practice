// String is simply a text inside quotes
// It can be created using single quotes, double quotes or backticks

// using single quotes
let singleQuoteStr = 'Hello, World!';
console.log(singleQuoteStr);

// using double quotes
let doubleQuoteStr = "Hello, World!";
console.log(doubleQuoteStr);

// using backticks
let backtickStr = `Hello, World!`;
console.log(backtickStr);


// string characteristics

// A single character can not be changed by accessing its index

let str = "hello";
str[0] = "H"; // this will not change the string
console.log(str); // Output: hello

// To change a string, we need to create a new string
let newStr = "H" + str.slice(1);
console.log(newStr); // Output: Hello


//  Each character in a string has a corresponding index starting from 0
let sampleStr = "JavaScript";
console.log(sampleStr[0]); // Output: J
console.log(sampleStr[1]); // Output: a
console.log(sampleStr[2]); // Output: v
console.log(sampleStr[3]); // Output: a

// String have a length property that returns the number of characters in the string
let lengthStr = "Hello, World!";
console.log(lengthStr.length); // Output: 13

// Constructor: It shows what created the string
let constructorStr = "Hello";
console.log(constructorStr.constructor); // Output: [Function: String]

let num = 123;
console.log(num.constructor); // Output: [Function: Number]

const isActive = true;
console.log(isActive.constructor); // Output: [Function: Boolean]

const arr = [1, 2, 3];
console.log(arr.constructor); // Output: [Function: Array]

const obj = { name: "John", age: 30 };
console.log(obj.constructor); // Output: [Function: Object]

const func = function() { return "Hello"; };
console.log(func.constructor); // Output: [Function: Function]


// Prototype: It is an object that is associated with every function and object in JavaScript
// const greeting = "Hello, World!";
// console.log(greeting.prototype); // Output: undefined // because string is not a function

// // However, we can access the prototype of the String constructor
// console.log(String.prototype); // Output: String {constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, bold: ƒ, …}


// common  javaScript string methods

let sample = "  Hello, JavaScript World!  ";

// 1. trim(): removes whitespace from both ends of a string
console.log(sample.trim()); // Output: "Hello, JavaScript World!"

// 2. toUpperCase(): converts a string to uppercase
console.log(sample.toUpperCase()); // Output: "  HELLO, JAVASCRIPT WORLD!  "

const world = "Hello";
console.log(world.indexOf("l")); // Output: 6 

// replace method
const x = "Hello World";
console.log(x.replace("World", "Treasure"))

// replace all method
const y = "Hello World World";
console.log(y.replaceAll("World", "Everyone"))

const gm = "heyy heyy Good morning";
console.log(gm.replaceAll("heyy", "Everyone"));


// split method
const splitStr = "Treasure dev";
console.log(splitStr.split("dev"));

const phone = "07039418955"
console.log(phone.split("070"));

const phrase = "Hello, how are you?";
console.log(phrase.split(" "));

// trim method
const str3 = " Javascript is awesome!   ";
console.log(str3.trim());

// repeat method
const repeatStr = "Ha! ";
console.log(repeatStr.repeat(3));

// incluedes method: checks if a string contains a specified substring
const includeStr = "JavaScript is fun";
console.log(includeStr.includes("fact"));
const includeStr2 = "JavaScript is fun";
console.log(includeStr.includes("fun"));