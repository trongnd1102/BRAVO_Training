/**
 * Remove element from an array
 * But leave hole => should use pop() or shift() instead
 * Syntax: delete array[index]
 */
const deleteArray = ["Nguyen","Dinh","Trong"];
delete deleteArray[1];
console.log(deleteArray);
// document.getElementById("delete").innerHTML = deleteArray; // Nguyen,,Trong