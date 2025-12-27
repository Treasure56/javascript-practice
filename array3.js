const users = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Mary", age: 17 },
  { id: 3, name: "Paul", age: 30 },
  { id: 4, name: "Lucy", age: 15 },
  { id: 5, name: "Mike", age: 40 }
];

const adults =users.filter(user => user.age >= 18);
console.log(adults);


console.log("------------------user names less than 4 characters-------------------");
const userss = users.filter(user => user.name.length > 4);
console.log(userss);