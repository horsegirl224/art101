/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Jasmyn Romo
   Date: 2023
*/
function generateRandomText() {
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // Get a random starting index to slice the Lorem Ipsum text
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  // Generate the random Lorem Ipsum-like text
  return text.slice(randStart, randStart + randLen);
}


// click listener for button
$("#make-convo").click(function(){
	console.log("click");
	// get new fake dialogue
	const newText = generateRandomText();
	// append a new div to our output div
	$("#output").append('<div class="text"><p>' + newText + '</p></div>');
});
