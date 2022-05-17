/**
 * Creat Map
 */
const fruits = new Map([
    ["apples", 100],
    ["bananas", 100],
    ["oranges", 100]
]);

// Map.set() => Set Map values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

// Map.get() => Get the value of a key in Map
console.log(fruits.get("apples"));

// Map.size => Return the number of elements in Map
console.log(fruits.size);

// Map.delete() => Remove a Map element
fruits.delete("oranges");

// Map.clear() => Remove all the elements from Map
fruits.clear();

// Map.has() => Return true if a key exists in Map
console.log(fruits.has("apples"));

// Map is object
console.log(typeof fruits);
console.log(fruits instanceof Map);

fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

// Map.keys() => Return an iterator object with the keys in Map
for (let x of fruits.keys()) {
    console.log(x);
}

// Map.values() => Return an iterator object with the values in Map
for (let x of fruits.values()) {
    console.log(x);
}

// Map.entries() => Return an iterator object with the [key,values] in Map
for (let x of fruits.entries()) {
    console.log(x);
}

// Map can use Objects as keys
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};
const anoFruits = new Map();
anoFruits.set(apples, 500);
anoFruits.set(bananas, 300);
anoFruits.set(oranges, 200);
for (const x of anoFruits.entries()) {
    console.log(x);
}