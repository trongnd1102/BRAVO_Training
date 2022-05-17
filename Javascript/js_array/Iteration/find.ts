/**
 * Return the value of the first element that passes the test function
 * Syntax: array.find(function(value, index, array))
 * If there are functions that are unused, they can be omitted
 */
const numbers = [45,4,5,20,9];
let test = numbers.find(findFunction);
console.log(test);
// document.getElementById("find").innerHTML = test; // 45

function findFunction(value: any) {
    return value > 15;
}

/**
 * findIndex() return the index of the first element that passes the test function
 * Syntax: array.findIndex(function(value, index, array))
 * If there are functions that are unused, they can be omitted
 */

let test1 = numbers.findIndex(findFunction);
console.log(test1)
// document.getElementById("findIndex").innerHTML = test1; // 0