/**
 * Create an Array Iterator, and then iterate over the key/value pairs
 * Syntax: array.entries()
 */
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

for (let x of f) {
  // document.getElementById("entries").innerHTML += x + " ";
  console.log(x + " ");
}
// 0,Banana
// 1,Orange
// 2,Apple
// 3,Mango