//28.Write a "mul" function which will properly when invoked as below syntax  

/** Here mul function accept the first argument and return anonymous function which take the second parameter and return anonymous function which take the third parameter and return multiplication of arguments which is being passed in successive
In JavaScript function defined inside has access to outer function variable and function is the first class object so it can be returned by function as well and passed as argument in another function.
A function is an instance of the Object type
A function can have properties and has a link back to its constructor method
Function can be stored as variable
Function can be pass as a parameter to another function
Function can be returned from function */

module.exports = function mul (x) {
    return function (y) { // anonymous function
      return function (z) { // anonymous function
        return x * y * z;
      };
    };
  }

