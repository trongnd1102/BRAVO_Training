/**
 * Search an array for an element value and return its position
 * Syntax: array.indexOf(item, start)
 *   + item: required - the item to search for
 *   + start: optional - where to start the search. Negative values will start 
 *            at the given position counting from the end, and search to the beginning
 * Return -1 if the item is not found
 * If the item is present more than once, it returns the position of the first occurrence
 */

const arr = ["Nguyen","Dinh","Trong","Nguyen","PTIT"];
let position = arr.indexOf("Nguyen"); // no start argument => start = 0
console.log(position);
// document.getElementById("indexOf").innerHTML = position; // 0

let position1 = arr.indexOf("Nguyen",1);
console.log(position1);
// document.getElementById("indexOf1").innerHTML = position1; // 3

let position2 = arr.indexOf("Nguyen",4);
console.log(position2);
// document.getElementById("indexOf2").innerHTML = position2; // -1

let position3 = arr.indexOf("Nguyen", -3); //start search from "Trong"
console.log(position3);
// document.getElementById("indexOf3").innerHTML = position3; // 3

/**
 * lastIndexOf() is the same as indexOf(), but returns the position 
 * of the last occurrence of the specified element
 */
let position4 = arr.lastIndexOf("Nguyen");
console.log(position4);
//  document.getElementById("indexOf4").innerHTML = position4; // 3



