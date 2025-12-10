const userForm = document.getElementById("userForm");
// const button = document.getElementById("generateButton");
const resultDiv = document.getElementById("result");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");

userForm.addEventListener("submit", function (e) {
  e.preventDefault(); // to stop form from refreshing the page
 

  // trim and lowercase first and last name

  const first = firstName.value.trim().toLowerCase();
  const last = lastName.value.trim().toLowerCase();

  // create username by combining first and last name
  const randomNum = Math.floor(Math.random() * 1000); // generate random number between 0-999

  const userName = `${first}_${last}${randomNum}`;

  resultDiv.innerText = `Generated Username: ${userName}`;
   // clear form after submission
  firstName.value = "";
  lastName.value = "";
});
