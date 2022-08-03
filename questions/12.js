//12.Suggest one simple way of removing duplicates from an array using ES6  
/*Let's use the Set() object. Sets are a new object type with ES6 (ES2015) that allow to create collections of unique values. The values in a set can be either simple primitives like strings or integers, but more complex object types like object literals or arrays can also be part of a set. */

const array = [1, 4, 99, 3, 1, 4, 15];
const noDups = Array.from(new Set(array));
console.log(noDups); //[1, 4, 99, 3, 15]

module.exports=noDups