//17.Test divisors of three 
/*Problem
You will be given 2 parameters: a low and high number. Your goal is to print all numbers between low and high, and for each of these numbers print whether or not the number is divisible by 3. If the number is divisible by 3, print the word "div3" directly after the number.
Answer
We'll solve this problem by first creating a loop that will print each number from low to high. Once we have the code for that written, we'll add a conditional that will check if the number is evenly divisible by 3 by using the mod operator. */

function test_divisors(low, high) {
  
    // we'll store all numbers and strings within an array
    // instead of printing directly to the console
    var output = [];
    
    for (var i = low; i <= high; i++) {
      
      // simply store the current number in the output array
      output.push(i);
      
      // check if the current number is evenly divisible by 3
      if (i % 3 === 0) { output.push('div3'); }
      
    }
    
    // return all numbers and strings
    return output;
    
  }
  
  test_divisors(2, 10);
  console.log(test_divisors(2, 10))

  module.exports=test_divisors
