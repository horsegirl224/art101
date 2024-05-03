// index.js - purpose and description here
// Author: Jasmyn Romo 
// Date: May 2

// shuffleArray - take an array and shuffle the contents
function shuffleArray(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;


  while (0 !== currentIndex) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
  }
  return array;
}

// sortUserName - a function that takes user input and sorts the letters
// of their name
function sortUserName(userName) {

  return userName.toLowerCase().split("").sort().join("");
}

// sortUserName - a function that takes user input and sorts the letters
// of their name
function randomizeName(userName) {
  // convert userName string to an array
  var nameArray = userName.toLowerCase().split("");
  console.log("nameArray =", nameArray);
  // shuffle array with our shuffle function
  var shuffledArray = shuffleArray(nameArray);
  console.log("shuffledArray =", shuffledArray);
  var shuffledString = shuffledArray.join("");
  // shift to Title Case (like a name)
  var newName = toTitleCase(shuffledString);
  // return array to a string
  return newName;
}

function main() {
  var userName = window.prompt("Hi. Tell me your name freak.");
  document.writeln("<style>:root {--textlen: " + userName.length + ";}</style>");
  var sortedName = sortUserName(userName);
  document.writeln("Here's your name, freak: " + sortedName + "</br></br>");
  var randomName = randomizeName(userName);
}

// call the function
main();