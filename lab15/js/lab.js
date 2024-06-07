// Jasmyn Romo
// June 6, 2024

// Constants for factors
const maxFactors = 3;
const outputEl = document.getElementById("output");

// Function to generate the output based on factors
function fizzBuzzBoom(maxNums) {
    const factorObj = {
        3: "Fizz",
        5: "Buzz",
        7: "Boom"
    };

    // Iterate over all numbers from 1 to maxNums (inclusive)
    for (let num = 1; num <= 200; num++) {
        // Reset output string
        let outputStr = "";
        
        // Iterate over the factors 
        for (const factor in factorObj) {
            // Check to see if the current number is a multiple of the factor
            if (num % factor == 0) {
                // If yes, add the corresponding string to outputStr
                outputStr += factorObj[factor];
            }
        }
        
        // Format outputStr
        if (outputStr) {
            outputStr = " - " + outputStr + "!";
        }
        
        // Output the result to the page
        outputToPage(num.toString() + outputStr);
    }
}

// Function to append output to the page
function outputToPage(str) {
    const newEl = document.createElement("p");
    newEl.innerHTML = str;
    newEl.classList.add("fizzbuzz-output"); // Add a class for styling
    outputEl.appendChild(newEl);
}

// Function to report errors
function reportError(str) {
    outputEl.innerHTML = "<div class='error'>" + str + "</div>";
}

// Event listener for the submit button
document.getElementById("submit").addEventListener("click", function() {
    const max = document.getElementById("max").value;
    console.log("max:", max);
    if (!max) {
        reportError("You must provide a maximum");
        return;
    }
    
    // Clear previous output
    outputEl.innerHTML = "";
    fizzBuzzBoom(max);
    outputEl.classList.add("cols");
});
