/**
 * Loop through the values of an iterable object
 * It can loop over iterable data structures such as Arrays, Strings, Maps, NodeLists,...
 * Syntax: for (variable of iterable) {
 *              code block
 *         }
 *  + variable - For every iteration the value of the next property is assigned to the variable.
 *                  Variable can be declared with const, let, or var.
 *  + iterable - An object that has iterable properties.
 */
// Loop over an array
const subject = ["Math", "Physic", "English"];
let txt1 = "";
for (let x of subject) {
  txt1 += x + " ";
}
document.getElementById("demoForOf1").innerHTML = txt1; // BMW Volvo Mini

// Loop over a string
let language = "JavaScript";
let txt2 = "";
for (let x of language) {
  txt2 += x + " ";
}
document.getElementById("demoForOf2").innerHTML = txt2;