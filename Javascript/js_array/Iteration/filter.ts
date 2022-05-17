/**
 * Create a new array with elements that passes a "test"
 * Syntax: array.filter(function(value, index, arr))
 * If there are functions that are unused, they can be omitted
 */
const numberFilter = [45,4,5,20,9];
const pass = numberFilter.filter(filterFunction);
console.log(pass);
// document.getElementById("filter").innerHTML = pass; // 45,20

function filterFunction(value: any) {
    return value > 10;
}