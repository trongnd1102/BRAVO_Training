/**
 * while loop can execute a block of code as long as a specified condition is true.
 * Syntax: while (condition) {
 *              code block
 *         }
 */
let res1 = "";
let k = 0;
while (k < 5) {
    res1 += (k+1) + " time; ";
    k++;
}
document.getElementById("demoWhile1").innerHTML = res1;

/**
 * do while loop is a variant of while loop
 * It executes the code block once, before checking if the condition is true, 
 *      then it will repeat the loop as long as the condition is true.
 */
let res2 = "";
let n=0;
do {
    res2 += (n+1) + " time; ";
    n++;
} while (n < 5);
document.getElementById("demoWhile2").innerHTML = res2;