/**
 * Convert an array to string of array value
 * Syntax: array.toString()
 */
const toStringArray = ["Nguyen", "Dinh", "Trong"];
let arrayToString = toStringArray.toString();
console.log(arrayToString);
// document.getElementById("toString").innerHTML = arrayToString; // Nguyen,Dinh,Trong,PTIT

/**
 * JavaScript automatically converts an array to a comma separated string 
 * when a primitive value is expected.
 */
// const toStringArray2 = ["Nguyen", "Dinh", "Trong"];
// document.getElementById("toString1").innerHTML = toStringArray2.toString(); // Nguyen,Dinh,Trong
// document.getElementById("toString2").innerHTML = toStringArray2; // Nguyen,Dinh,Trong