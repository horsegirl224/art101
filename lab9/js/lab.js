/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Jasmyn Romo
   Date: 2023
*/

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>poop</button>");
// add a click listener to the challenge button
$("button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});
$( "#challenge" ).on( "click", function() {
    alert( "why did you poop" );
  } );
 

// add button to problems section
$("#problems").append("<button id='button-problems'>horse</button>");
// add a click listener to the problems button
$("button-problems").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#problems").toggleClass("special");
});
$( "#problems" ).on( "click", function() {
    alert( "neigh" );
  } );
 

// add button to results section
$("#results").append("<button id='button-results'>meow</button>");
// add a click listener to the results button
$("button-results").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#results").toggleClass("special");
});
$( "#results" ).on( "click", function() {
    alert( "meow meow meow meow" );
  } );
 
 