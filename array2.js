const users = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Mary", age: 22 },
  { id: 3, name: "Paul", age: 30 },
  { id: 4, name: "Lucy", age: 28 }
];

// getting all user names in uppercase

const userNames = users.map(user => user.name.toLocaleUpperCase());
console.log(userNames);

// getting all usernames with return statement

const getUserNames = users.map(user => {
  return user.name.toLocaleUpperCase();
});

// get the first oldest user
const getFirstOlderUser = users.find(user => user.age >=30);
console.log(getFirstOlderUser);


// create a new array without Mary
const newArr = users.filter(user => user.name !== "Mary");
console.log(newArr); 

const users2 = users.filter(user => false); // this will create an empty array because no user satisfies the condition


// to update Mary's age to 29 directly in the users array
const updateAge = users.find(user => user.name === "Mary")
updateAge.age = 29;
console.log(updateAge);

// find is used to locate an item and modify it directly in the original array


// add new user to the array
 users.unshift({id: 5, name: "Alice", age: 24});
console.log(users);

// check if a user named Bob exists
const isBob = users.some(user => user.name === "Bob");
console.log(isBob);


// sort users from oldest to youngest
const userAges = users.sort((a, b) => b.age - a.age);
console.log(userAges);

// geting the names of the young users
const namesOfYoungUsers = users.filter((user) => user.age < 30).map((user) => user.name.toLowerCase());
console.log(namesOfYoungUsers);

// remove user named Paul
const index = users.findIndex(user => user.name === "Paul");
if (index !== -1) {
  users.splice(index, 1);
}
console.log(users);

//  increase each user's age by 1

const increaseUserAges = users.map(user => {
 if(user.age < 30){
  user.age += 1;
  return user;
 }
})
console.log(increaseUserAges);

const scores = [10, 20, 30];
// use a for loop to log each score
for(let i = 0; i < scores.length; i++) {
  console.log(scores[i]);
}

// use forEach to log each score
scores.forEach(score => console.log(score));

const ages = [12, 18, 25, 30, 15];
const elders = ages.filter(age => age >= 18);
console.log(elders);

// find the first age that is 18 or older
const firstElder = ages.find(age => age >= 18);
console.log(firstElder);

// check if age is below 13

const lowerAge = ages.some(age => age < 13);

console.log("--------------------------------advanced examples------------------------------");

// const users = [
//   { id: 1, name: "John", age: 25 },
//   { id: 2, name: "Mary", age: 22 },
//   { id: 3, name: "Paul", age: 30 },
//   { id: 4, name: "Lucy", age: 28 }
// ];

const updatePaulsAge = users.find(user => user.name === "Paul");
updatePaulsAge.age += 1;
console.log(updatePaulsAge);