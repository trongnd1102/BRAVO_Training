/**
 * Call a function once for each of array element
 * Syntax: array.forEach(function(value, index, arr), thisValue)
 */
const numberForEach = [45,4,5,20,9]
let txt = "";
numberForEach.forEach(myFunction);
console.log(txt);
// document.getElementById("forEach").innerHTML = txt;
//  The value of the 1 number is: 45
//  The value of the 2 number is: 4
//  The value of the 3 number is: 5
//  The value of the 4 number is: 20
//  The value of the 5 number is: 9

function myFunction(value: any, index: any){
    txt += "The value of the " + (index+1) + " number is: " + value + "\n";
}

/**
 * Function take 3 arguments: item value, item index and array itself
 * If the callback function doesn't use the index and array parameters, they can be omitted
 */