//9.What is the definition of a Higher-Order Function?  
/*A higher-order function is any function that takes one or more functions as arguments, which it uses to operate on some data, and/or returns a function as a result. Higher-order functions are meant to abstract some operation that is performed repeatedly. The classic example of this is map, which takes an array and a function as arguments. map then uses this function to transform each item in the array, returning a new array with the transformed data. Other popular examples in JavaScript are forEach, filter, and reduce. A higher-order function doesn't just need to be manipulating arrays as there are many use cases for returning a function from another function. Function.prototype.bind is one such example in JavaScript. */

const names = ['irish', 'daisy', 'anna'];

const transformNamesToUppercase = function(names) {
    return names.map(name => name.toUpperCase());
};
transformNamesToUppercase(names);

console.log(transformNamesToUppercase(names));
module.exports=transformNamesToUppercase;