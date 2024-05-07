// index.js -make username and display it
// Author: Jasmyn Romo 
// Date: May 2


function reverse (x) {
    return (x % 4 == 0);
}

//test function
console.log("Is 3 reverse of 4? ", reverse(3));
console.log("Is 4 reverse of 4?", reverse(4));

array = [4, 35, 78, 197, 19999]
console.log("My array", array);

var result = array.map(reverse);
// should return [true, false, false, false, false]
console.log("Test of reverseness of 4 of arry:", result);

var result = array.map(function(x){
    return x ** 0.6;
})
// should return [2.2973967099940698, 8.441912115297926, 13.65390137775539, 23.805633092783566, 380.7193657053214]
console.log(".6 multiplication of array:", result);