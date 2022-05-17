/**
 * Sort() function sorts values as strings
 * So that it doesn't work well for number (2>1 => 25>100)
 * Use compare function to fix it
 */
const numbers = [20,100,1,5,25];
numbers.sort(function(a,b) {return a-b}); //sort ascending
console.log(numbers);
// document.getElementById("sort1").innerHTML = numbers; // 1,5,20,25,100
numbers.sort(function(a,b) {return b-a}); //sort descending
console.log(numbers);
// document.getElementById("sort2").innerHTML = numbers; //100,25,20,5,1

/**
 * Compare function defines an alternative sort order
 * Return a negative, zero, positive value, depending on the arguments
 * Ex: function(a,b) {return a-b}
 * If a-b result is negative, it sort a as a value lower than b
 */

