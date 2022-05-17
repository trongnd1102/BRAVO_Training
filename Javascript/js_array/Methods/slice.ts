/**
 * Slice out a piece of an array into a new array
 * Syntax: array.slice(index)
 */
const sliceArray = ["Nguyen","Dinh","Trong","PTIT", "D17"];
let firstname = sliceArray.slice(2);
console.log(sliceArray);
console.log(firstname);
// document.getElementById("slice").innerHTML = firstname; // Trong,PTIT,D17

/**
 * Can select elements that is sliced out
 * Syntax: array.slice(start,end)
 * The "end" element is not be sliced out
 */
let fullname = sliceArray.slice(1,4);
console.log(fullname);
// document.getElementById("slice2").innerHTML = fullname; // Dinh,Trong,PTIT