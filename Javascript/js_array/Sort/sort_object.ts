/**
 * If array contain objects, and objects have different data types
 * You can write compare function to compare the property values
 */
const test = [
    {subject:"Math",point:8.5},
    {subject:"Physic",point:9},
    {subject:"English",point:10}
];
// sort point (number)
test.sort(function(a,b) {return a.point - b.point});
console.log(test);
//sort subject (string)
test.sort(function(a,b) {
    let x = a.subject.toLowerCase();
    let y = b.subject.toLowerCase();
    if (x<y)    {return -1;}
    if (x>y)    {return 1;}
    return 0;
});
console.log(test);