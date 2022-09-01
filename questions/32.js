//32.Make this work  
/** Problem
duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5] */

module.exports = function duplicate(arr) {
    return arr.concat(arr);
  }
  