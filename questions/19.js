//19.Sum of Array Plus One  
/*Problem
Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each. */

// ES5 method is nice and clean
const es5 = function (array) {
    return array.reduce(function (memo, num) {
      return memo + num;
    }, array.length);
  };
  
  // Without array.reduce method isn't much different
const iterative = function (array) {
    var result = array.length;
  
    for (var i = 0; i < array.length; i++) {
      result += array[i];
    }
  
    return result;
  };

  console.log(es5[1, 2, 3, 4, 5])
  console.log(iterative[1, 2, 3, 4, 5])

  module.exports=es5
  module.exports=iterative