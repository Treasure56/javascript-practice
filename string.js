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

// let str = "hello";
// str[0] = "H"; // this will not change the string
// console.log(str); // Output: hello

// To change a string, we need to create a new string
// let newStr = "H" + str.slice(1);
// console.log(newStr); // Output: Hello


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
// console.log(phrase.split(" "));

console.log(phrase.split(" ", 2))
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


const helloStr = "Hello World!";

console.log(helloStr.indexOf("Wor")); // Output: 7


const tee = "heyy heyy Good morning";
console.log(tee.replace("heyy", "Everyone"));

const testPhrase = "Hello, how are you?";
console.log(testPhrase.split(" ", 2));

 // str.substring(startIndex, endIndex)
  const substringStr = "JavaScript is awesome";
  console.log(substringStr.substring(0, 10)); // Output: JavaScript
// slice is for extracting a part of a string and returns the extracted part in a new string
  const word = "Hello World!";
  console.log(word.slice(1, 4)); // Output: ell
  console.log(word.substring(1, 4)); // Output: ell

  const greet = "Hello, World!";
  console.log(greet.slice(-6, -1)); // Output: World
  console.log(greet.substring(-6, -1)); // Output: "" (empty string)

  const heyy = "treasure";
  console.log(heyy.slice(2, 2)); 

  "hello".substring(3, 1) 
  const hello = "hello world";
  console.log(hello.substring(3, 1));
  "hello world".slice(-5)
  const helloWorld = "hello world";
  console.log(helloWorld.slice(-5)); // Output: world
  const programming = "Programming";
  console.log(programming.slice(4, 7));


  const [] = [1];
  console.log([]) 

  const const = 1;
  console.log(const)

  const name = "my name is treasure";
  console.log(name.split("")); // splits each character

  const item = Number("name")
  console.log(item) 

  // how can i determine if item is a valid number or not

  //return type of Number.isNaN(item); 

  // two ways ways variables store data
  // by value and by reference

  cons sentence = "i ate rice today";
  // array every word as an element
  console.log(sentence.split(" ", 2));  // output: ["i", "ate"]  // splits into two elements only

  // types in javascript
  // primitive types: string, number, boolean, null, undefined, symbol, bigint
  // reference types: array, object, function

  // typeof(null) // object
  // difference between typeof and instanceof

  // typeof checks the type of a variable
  // instanceof checks if an object is an instance of a specific class or constructor function
  eg :

  const arr1 = [1, 2, 3];
  console.log(arr1 instanceof Object); // true because array is an object
  console.log(arr1 instanceof Array); // true because arr1 is an instance of Array
  alert("Your message contains inappropriate language. Please revise your message before sending.");

// to check type null
if (null )
  // null is what type of object: 
  






  



