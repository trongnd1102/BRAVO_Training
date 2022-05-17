/**
 * Run a function on each elements to produce (reduce it to) a single value
 * Work from left to right in the array
 * No reduce the original array
 * Syntax: array.reduce(function(total, value, index, arr))
 */
const numberReduce = [45,4,5,20,9];
let sum = numberReduce.reduce(reduceFunction);
console.log(sum);
// document.getElementById("reduce").innerHTML = sum; // 83

function reduceFunction(total: any, value: any){
    return total + value;
}

/**
 * The function take 4 arguments:
 *     + total (the initial value/previously returned value)
 *     + item value
 *     + item index
 *     + array itself
 * The above function doesn't use the index and array parameters, so they can be omitted
 */

/**
 * The reduce() method can accept an initial value
 */
let sum2 = numberReduce.reduce(reduceFunction, 100);
console.log(sum2);
// document.getElementById("reduceWithInitialValue").innerHTML = sum2; // 183

/**
 * The reduceRight() is the same as the reduce() but works from right to left
 */
let sum3 = numberReduce.reduceRight(reduceFunction, 100);
console.log(sum3);