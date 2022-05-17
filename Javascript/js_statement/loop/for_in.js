/**
 * Loop through the properties of an object
 * Syntax: for (key in object) {
 *              code block
 *         }
 */
const person = {fname: "Trong", lname: "Nguyen", age: 23};
let txt = "";
for (let x in person) {
    txt += person[x] + " ";
}
document.getElementById("demoForIn1").innerHTML = txt; // Trong Nguyen 23

/**
 * Also loop over the properties of an array
 * Syntax: for (variable in array) {
 *              code block
 *         }
 */
const numbers = [45, 4, 5 , 9, 20];
let res = "";
for (let x in numbers) {
    res += numbers[x] + " ";
}
document.getElementById("demoForIn2").innerHTML = res; // 45 4 5 9 20;