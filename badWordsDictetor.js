const MessageForm = document.getElementById("badWordsForm")
const messageInput = document.getElementById("inputText");
const res = document.getElementById("result");

const badwords = [
  "stupid",
  "dumb",
  "idiot",
  "fool",
  "kill",
  "hate",
  "killer",
  "moron",
  "retard",
  "asshole",
  "bitch",
  "slut",
  "whore",
  "prick",
  "shit",
  "fuck",
  "cunt",
  "cock",
  "pussy",
  "piss",
  "turd",
  "dickhead",
  "motherfucker",
  "bastard",
  "son of a bitch",
  "ass",
  "arsehole",
  "balls",
  "fag",
  "faggot",
  "fug",
  "hell",
  "damn",
  "goddamn",
  "for fucks sake",
  "bullshit",
  "bullcrap",
  "crap",
  "shit",
  "fucking",
  "fucking hell",
  "fucking damn",
  "fucking goddamn",
  "fucking damn hell",
  "fucking damn it",
  "fucking damn you",
  "fucking damn your ass",
  "fucking damn your soul",
  "fucking damn your mother",
  "fucking damn your father",
  "fucking damn your family",
  "fucking damn your friends",
  "fucking damn your enemies ",
  "fucking damn your life",
  "fucking damn your death",
  "fucking damn your everything",
];

MessageForm.addEventListener("submit", function (e) {
  e.preventDefault(); // to stop form from refreshing the page
const message = messageInput.value.toLowerCase();


 let flagged = false;
 for(let i = 0; i < badwords.length; i++) {
    if(message.includes(badwords[i])) {
      flagged = true;
      break;
    }
  }
 // if an innapropriate word is found warn the user
 if(flagged) {
    res.innerText = "Inappropriate word  detected. Please modify your message.";
    res.style.color = "red";
 } else {
    res.innerText = "Message is clean. No inappropriate words detected.";
    res.style.color = "green";
 } 
 
});
