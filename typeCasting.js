// type casting in javascript is the process of converting a variable from one data type to another data type

// there are two types of type casting in javascript
// 1. implicit type casting
// 2. explicit type casting

// implicit type casting
  const num = "7" / 3; // string to number
    const numToStr =  "7" + 3 // number to string



  console.log(num)
  console.log(numToStr)



  // explicit type casting
  const stringToNumber = Number("1234");
  console.log(stringToNumber);

  const numberToString = String(1234);
  console.log(numberToString);

  const dateToString = String(new Date());
  console.log(dateToString);

  const boolToString = String(true);
  console.log(boolToString);

  const boolToNumber = Number(true);
  console.log(boolToNumber);

  
  // converting number to array
  let numToArray = 5
  let array = [numToArray];
  console.log(array);


  // using using Array.from() method to convert string to array
  let str = "hello";
  let strToArray = Array.from(str);
  console.log(strToArray);

  // using split() method to convert number to array
  let num2 = 12345;
  let numToArray2 = String(num2).split("");
  console.log(numToArray2);

  // using split() method to convert string to array
  let str2 = "hello world";
  let strToArray2 = str2.split(" ");
  console.log(strToArray2);

  // converting array to object

  // converting array to object unsing Object.assign() method
  let arr = ["name", "age", "country"];
  let arrToObj = Object.assign({}, arr);
  console.log(arrToObj);

  // using JSON.stringify() method to convert object to string
  let obj = { name: "John", age: 30, country: "USA" };
  let objToStr = JSON.stringify(obj);
  console.log(objToStr);