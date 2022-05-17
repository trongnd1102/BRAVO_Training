/**
 * After sorting the array, you can use index to get the max/min values
 */
const numberList = [20,100,1,5,25];
numberList.sort(function(a,b) {return a-b}); //sort ascending
console.log(numberList);
// document.getElementById("sort").innerHTML = numberList; // 1,5,20,25,100
// Now, numberList[0] is the min value and numberList[numberList.length-1] is the max value
let x = numberList[0];
let y = numberList[numberList.length-1];
console.log(x);
console.log(y);

/**
 * If you don't want to sort, you can use Math.max() and Math.min()
 */
function maxValue(arr: any){
    return Math.max.apply(null,arr);
}
function minValue(arr: any){
    return Math.min.apply(null,arr);
}
console.log(maxValue(numberList));
console.log(minValue(numberList));
// document.getElementById("max").innerHTML = maxValue(numberList); // 100
// document.getElementById("min").innerHTML = minValue(numberList); // 1

/**
 * You also can build function to find max/min
 */
function findMax(arr: any){
    let len = arr.length;
    let max = -Infinity;
    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
        }
    }
    return max;
}
function findMin(arr: any){
    let len = arr.length;
    let min = Infinity;
    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }
    return min;
}
console.log(findMax(numberList));
console.log(findMin(numberList));
