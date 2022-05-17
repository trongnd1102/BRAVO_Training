/**
 * Fill specified elements in array with a value
 * Syntax: array.fill(value, start, end)
 * start & end are optional
 * Overwrite the original array
 */
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const test1 = fruits.fill("Kiwi");
console.log(test1);
// document.getElementById("fill1").innerHTML = test1; // Kiwi,Kiwi,Kiwi,Kiwi
const test2 = fruits.fill("Lemon",2,4);
console.log(test2);
// document.getElementById("fill2").innerHTML = test2; // Banana,Orange,Lemon,Lemon