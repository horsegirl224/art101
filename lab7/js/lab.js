// index.js -make username and display it
// Author: Jasmyn Romo 
// Date: May 2



// sortusername 
function sortUserName(userName) {

  return userName.toLowerCase().split("").sort().join("");
}

// sortusername 
function randomizeName(userName) {
  // convert username string to an array
  var nameArray = userName.toLowerCase().split("");
  console.log("nameArray =", nameArray);
  // shuffle array with our shuffle function
  var shuffledArray = shuffleArray(nameArray);
  console.log("shuffledArray =", shuffledArray);
  var shuffledString = shuffledArray.join("");
  // shift to title case (like a name)
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