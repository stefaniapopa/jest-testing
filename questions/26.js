//26.Remove duplicates of an array and return an array of only unique elements  

// ES5 Implementation
let array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

let duplicate = uniqueArray(array); // [1, 2, 3, 5, 9, 8]

function uniqueArray(array) {
  var hashmap = {};
  var unique = [];

  for(var i = 0; i < array.length; i++) {
    // If key returns undefined (unique), it is evaluated as false.
    if(!hashmap.hasOwnProperty(array[i])) {
      hashmap[array[i]] = 1;
      unique.push(array[i]);
    }
  }

  return unique;
}

module.exports=duplicate