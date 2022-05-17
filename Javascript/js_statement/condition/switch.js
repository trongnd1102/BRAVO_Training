/**
 * Use the switch statement to select one of many code blocks to be executed.
 * Syntax: switch (expression) {
 *             case x:
 *                 code block
 *                 break;
 *             case y:
 *                 code block
 *                 break;
 *             default:
 *                 code block
 *          }
 *  + The switch expression is evaluated once.
 *  + The value of the expression is compared with the values of each case.
 *  + If there is a match, the associated block of code is executed.
 *  + If there is no match, the default code block is executed.
 */
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("demo-switch").innerHTML = "Today is " + day +"!";

/**
 * The break keyword breaks out of the switch block.
 * It is not necessary to break the last case in a switch block.
 * The block breaks (ends) there anyway.
 */

/**
 * The default keyword specifies the code to run if there is no case match.
 * It doesn't have to be the last case in a switch block.
 * If default isn't the last case in the switch block, must end the default case with a break.
 */