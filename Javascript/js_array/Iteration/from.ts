/**
 * Returns an array object from any object with a length property or any iterable object
 * Syntax: array.from()
 */
let textFrom = "ABCDEFG"
const arr = Array.from(textFrom);
console.log(arr);
// document.getElementById("from").innerHTML = arr; // A,B,C,D,E,F,G