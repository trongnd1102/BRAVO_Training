/**
 * Creats a new array by performing a function on each array element
 * Not excute the function for elements without values
 * Not change the original array
 * Syntax: array.map(function(value, index, arr))
 */

const numbers1 = [45,4,5,20,9];
const numbers2 = numbers1.map(myFunction);
console.log(numbers2);
// document.getElementById("map").innerHTML = numbers2; // 90,8,10,40,18

function myFunction(value: any){
    return value * 2;
}