/**
 * Conditional statements are used to perform different actions based on different conditions
 */
/**
 * Use the if statement to specify a code block to be executed if a condition is true.
 * Use the else statement to specify a code block to be executed if the condition is false.
 * Syntax: if (condition) {
 *              code block to be executed if the condition is true
 *         } else {
 *              code block to be executed if the condition is false
 *         }
 */
const hour = new Date().getHours(); 
let greeting1;
if (hour < 18) {
  greeting1 = "Good day!";
} else {
  greeting1 = "Good evening!";
}
console.log("Now is " + hour + " hour.");
document.getElementById("demo-if-else-1").innerHTML = greeting1;

/**
 * Use the else if statement to specify a new condition if the first condition is false.
 * Syntax: if (condition 1) {
 *              code block to be executed if the condition 1 is true
 *         } else if (condition 2) {
 *              code block to be executed if the condition 2 is true
 *         } else {
 *              code block to be executed if the condition 1 & 2 are false
 *         }
 */
const time = new Date().getHours();
let greeting2;
if (time < 12) {
  greeting = "Good morning!";
} else if (time < 18) {
  greeting2 = "Good afternoon!";
} else {
  greeting2 = "Good evening!";
}
console.log("Now is " + time + " hour.");
document.getElementById("demo-if-else-2").innerHTML = greeting2;