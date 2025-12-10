 const x = 20;
 console.log(x.toString());


 // using the built in Number function

 let num = new Number(50);
 console.log(typeof num); // Output: object

 const num2 = 2.56
console.log(num2.toFixed()) 

// toFixed controls decimal places (to round number)

// converting string to integer

 const strNum = "100";

 console.log(parseInt(strNum)); 

 const str = 2.6;
console.log(parseFloat(str));

// isNaN function

  const value = "hello";
  console.log(isNaN(value));

  const n = new Number("123abc");


  // max-safe-integer
  const maxSafeInt = Number.MAX_SAFE_INTEGER;
  console.log(maxSafeInt); // Output: 9007199254740991


  // valueof is used
  const val = 5.000643434;
  console.log(val.valueOf());
  
  