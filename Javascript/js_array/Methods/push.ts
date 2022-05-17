/**
 * Add new element to an array (at the end)
 * Syntax: array.push()
 */
const pushArray = ["Nguyen", "Dinh", "Trong"];
pushArray.push("PTIT");
console.log(pushArray);
//  document.getElementById("push").innerHTML = pushArray; // Nguyen,Dinh,Trong,PTIT

// push() method returns the new array length
console.log(pushArray.push("D17"));
//  document.getElementById("push1").innerHTML = pushArray.push("D17"); // 5