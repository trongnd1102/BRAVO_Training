/**
 * Check if all array values pass the "test"
 * Syntax: array.every(function(value, index, arr))
 * If there are functions that are unused, they can be omitted
 */
const numberEvery = [45,4,5,20,9];
let check = numberEvery.every(everyFunction);
console.log(check);
// document.getElementById("every").innerHTML = check; //true

function everyFunction(value: any, index: any, arr: any) {
    return value < 50;
}