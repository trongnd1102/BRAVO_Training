/**
 * Retur an Array Iterator object with the keys of the array
 * Syntax: array.keys()
 */

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

let text = "";
for (let x of keys) {
  text += x + " ";
}
console.log(text);
// document.getElementById("key").innerHTML = text; // 0 1 2 3