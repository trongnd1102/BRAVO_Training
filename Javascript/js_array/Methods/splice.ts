/**
 * Use to add new items to an array
 * Syntax: array.splice(number1, number2, "item1", "item2", ...)
 * Number 1 is the position where new elements should be added
 * Number 2 defines how many element should be removed
 */
const spliceArray = ["Nguyen","Dinh","Trong"];
spliceArray.splice(1,0,"PTIT");
console.log(spliceArray);
// document.getElementById("splice").innerHTML = spliceArray; // Nguyen,Dinh,PTIT,Trong

/**
 * Also can used to remove items
 */
spliceArray.splice(1,1);
console.log(spliceArray);
console.log(spliceArray.splice(1,1));
// document.getElementById("splice2").innerHTML = spliceArray; // Nguyen,Dinh,Trong
// document.getElementById("splice2").innerHTML = spliceArray.splice(1,1); // Dinh

