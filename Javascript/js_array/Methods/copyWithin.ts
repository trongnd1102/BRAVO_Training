/**
 * Copy elements to another position in the array
 * Overwrite the existing value
 * Not add item to the array
 * Syntax: array.copyWithin(target, start, end)
 *  + target: required - the index to copy the elements to
 *  + start: optional - the start index. Default is 0
 *  + end: optional - the end index. Default is the array length
 */
const f1 = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
const f2 = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
console.log(f1.copyWithin(2,0));
console.log(f2.copyWithin(2,0,2));
// document.getElementById("copy1").innerHTML = f1.copyWithin(2,0);
// document.getElementById("copy2").innerHTML = f2.copyWithin(2,0,2);