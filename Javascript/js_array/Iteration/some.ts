/**
 * Check if some array value pass the test
 * Syntax: array.some(function(value,index,array))
 */
const numberSome = [45,4,5,20,9];
let check = numberSome.some(someFunction);
console.log(check);
// document.getElementById("some").innerHTML = check; //true

function someFunction(value: any){
    return value > 10;
}

/**
 * The function uses the first parameter only (value), the other parameters can be omitted
 */