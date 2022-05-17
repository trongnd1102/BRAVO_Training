/**
 * Add a new element to an array (at the beginning), and "unshift" other elements
 * Syntax: array.unshift()
 */
const unshiftArray = ["Dinh", "Trong", "PTIT"];
unshiftArray.unshift("Nguyen");
console.log(unshiftArray);
//  document.getElementById("unshift").innerHTML = unshiftArray; // Nguyen,Dinh,Trong,PTIT

/**
 * Return the new array length
 */
console.log(unshiftArray.unshift("1"));
console.log(unshiftArray);
//  document.getElementById("unshift1").innerHTML = unshiftArray.unshift("1"); // 5
//  document.getElementById("unshift2").innerHTML = unshiftArray; // 1,Nguyen,Dinh,Trong,PTIT
