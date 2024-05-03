
// Author: Jasmyn Romo 
// Date: April 28


//Define Variables
myTransport = ["Kia Soul", "bike", "horse"];

//create an object for my main ride
var myMainRide = {
  make: "Kia",
  model: "Soul",
  color: "red",
  year: 2013, 
  age: function() {
    return 2024 - this.year;
  }
}

//output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
//
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");


