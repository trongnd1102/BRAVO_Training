/**
 * Test reference
 */
let refOrigin = [1];
console.log(refOrigin);
const refCopy = refOrigin; // refCopy copies refOrigin's reference
// Now, refOrigin & refCopy contain a reference to the same array. They have the same address. 

// So that, if refOrigin changes, refCopy also changes (and vice versa)
refOrigin.push(3);
console.log(refOrigin, refCopy);
refCopy.shift();
console.log(refOrigin, refCopy);

// If refOrigin is reassigned
const refOrigin2 = [3];
refOrigin = refOrigin2; // refOrigin now contains a reference to a new array (the same as refOrigin2, different from refCopy)
console.log(refOrigin, refCopy, refOrigin2); // 3 of them have the same "value", but...
console.log(refOrigin === refOrigin2); // -> true, because they have the same reference
console.log(refOrigin === refCopy); // -> false, because they have different reference
// When the equality operators, == and ===, are used on reference-type variables, they check the reference.

/**
 * Clone object
 */
// 1, Using Spead
const menu = {
    food: "beef",
    drinks: "wine"
}
const cloneMenu1 = { ...menu};
console.log(cloneMenu1); // cloneMenu1 has the same value but diifernet reference

// 2, Using assign
const cloneMenu2 = Object.assign({}, menu);
console.log(cloneMenu2);

// 3, Using JSON
const cloneMenu3 = JSON.parse(JSON.stringify(menu));
console.log(cloneMenu3);
