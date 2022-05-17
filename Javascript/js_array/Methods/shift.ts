/**
 * Remove the first array element and shift all other element to a lower index
 * Syntax: array.shift()
 */
const shiftArray = ["Nguyen", "Dinh", "Trong", "PTIT"];
shiftArray.shift();
console.log(shiftArray);
//  document.getElementById("shift").innerHTML = shiftArray; // Dinh,Trong,PTIT

// shift() method returns the element that shifted out
console.log(shiftArray.shift());
// document.getElementById("shift1").innerHTML = shiftArray.shift(); // Dinh