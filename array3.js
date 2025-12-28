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
const longNames = users.filter(user => user.name.length > 4);
console.log(longNames);

console.log("------------------------------only users older than 25 --------------------------")

const olderUsers = users.filter(user => user.age > 25).map(user => user.name);
console.log(olderUsers);

console.log("------------------check if any user is younger than 21-------------------");

const youngerUser = users.some(user => user.age < 21);
console.log(youngerUser);

console.log("------------------update Mary's age to 23-------------------");

const updateMaryAge = users.find(user => user.name === "Mary");
if(updateMaryAge){
  updateMaryAge.age = 23
}
console.log(updateMaryAge);

console.log("------------------increase each user's age by 1-------------------");

const updateUsersAge = users.map(user => {
  return{
    ...user,
    age: user.age + 1
  }
}
);
console.log(updateUsersAge);


console.log("------------------remove users younger than 18-------------------");

const removeYoungerUsers = users.filter(user => user.age >= 26);
console.log(removeYoungerUsers);


console.log("------------------sort users from younger to older-------------------");
const youngerToOld = [...users].sort((a, b) => a.age - b.age )
console.log(youngerToOld)

const youngerToOld2 = users.slice().sort((a, b) => a.age - b.age )
console.log(youngerToOld2)

const sorted = [...users];
sorted[0].age += 1;  // why does this still mutate users age? ans: because only the array is copied but the objects inside are still referenced


console.log("------------------total age of users-------------------");

const usersAge = users.reduce((acc, user) => acc + user.age, 0);
console.log("Total age of users:", usersAge);


const userNames = users.reduce((acc, user) => {
  acc.push(user.name);
  return acc;
}, []);
console.log("User names:", userNames);