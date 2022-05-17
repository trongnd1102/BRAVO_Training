/**
 * Can excute a block of code a number of times
 * Syntax: for (statement 1; statement 2; statement 3) {
 *              code block
 *          }
 *  + Statement 1 - excute (one time) before the execution of the code block
 *  + Statement 2 - define condition for executing the code block
 *  + Statement 3 - excute (every time) after the code block has been excuted
 */
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let list1 = "";
for (let i = 0; i < cars.length; i++) {
  list1 += cars[i] + " ";
}
document.getElementById("demoFor1").innerHTML = list1; // BMW Volve Saab Ford

// Statement 1 can be omitted (when values are set before the loop starts)
let i = 2;
let len = cars.length;
let list2 = "";
for (; i < len; i++) {
  list2 += cars[i] + " ";
}
document.getElementById("demoFor2").innerHTML = list2; // Saab Ford

// Statement 3 can be omitted (when increment values inside the loop)
let j = 0
let list3 = "";
for (; j < cars.length;) {
  list3 += cars[j] + " ";
  j++;
}
document.getElementById("demoFor3").innerHTML = list3; // BMW Volve Saab Ford