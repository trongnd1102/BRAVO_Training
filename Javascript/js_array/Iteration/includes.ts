/**
 * Check if an element is present in an array (including NaN, unlike indexOf).
 * Syntax: array.includes(element_name,start_search)
 */
const fruits = ["Banana", "Orange", "Apple", "Mango", " "];
console.log(fruits.includes("Banana", 0));
console.log(fruits.includes("Banana", 1));
console.log(fruits.includes(" ", 0));
// start_search is optional
console.log(fruits.includes("Banana"));

// document.getElementById("includes1").innerHTML = fruits.includes("Banana", 0); // true
// document.getElementById("includes2").innerHTML = fruits.includes("Banana", 1); // false
// document.getElementById("includes3").innerHTML = fruits.includes(" ", 0); // true

// document.getElementById("includes4").innerHTML = fruits.includes("Banana"); // true