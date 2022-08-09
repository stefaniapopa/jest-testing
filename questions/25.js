//25.Find the missing number in O(n) time  
/** Problem
Being told that an unsorted array contains (n - 1) of n consecutive numbers (where the bounds are defined), find the missing number in O(n) time */

// The output of the function should be 8
let arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7];
let upperBound = 9;
let lowerBound = 1;

let findingMissingNumber = findMissingNumber(arrayOfIntegers, upperBound, lowerBound); // 8

function findMissingNumber(arrayOfIntegers, upperBound, lowerBound) {
  // Iterate through array to find the sum of the numbers
  let sumOfIntegers = 0;
  for (let i = 0; i < arrayOfIntegers.length; i++) {
    sumOfIntegers += arrayOfIntegers[i];
  }

  // Find theoretical sum of the consecutive numbers using a variation of Gauss Sum.
  // Formula: [(N * (N + 1)) / 2] - [(M * (M - 1)) / 2];
  // N is the upper bound and M is the lower bound

  let upperLimitSum = (upperBound * (upperBound + 1)) / 2;
  let lowerLimitSum = (lowerBound * (lowerBound - 1)) / 2;

  let theoreticalSum = upperLimitSum - lowerLimitSum;

  return theoreticalSum - sumOfIntegers;
}

module.exports=findingMissingNumber