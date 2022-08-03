//18.Oddball sum  
/*Problem
Write a function called oddball_sum which takes in a list of numbers and returns the sum of all the odd elements. Try to solve with and without reduce function.
Answer
To solve this challenge we'll simply loop through the array while maintaining a final count, and every time an odd number is encountered we'll add it to the count. */

//Without reduce:

function oddball_sum(nums) {
 
    // final count of all odd numbers added up
    var final_count = 0;
    
    // loop through entire list
    for (var i = 0; i < nums.length; i++) {
      
      // we divide by 2, and if there is a remainder then
      // the number must be odd so we add it to final_count
      if (nums[i] % 2 === 1) {
        final_count += nums[i]
      }
      
    }
    
    return final_count;
    
  }
  
  oddball_sum([1, 2, 3, 4, 5]); 


  //With reduce:

  function oddballs_sum(nums) {
    return nums.reduce(function(total, item){
        if (item % 2 === 1) {
            return total += item;
        }
        return total;
    });
  }

  console.log(oddball_sum([1, 2, 3, 4, 5]))
  console.log(oddballs_sum([1, 2, 3, 4, 5]))
  module.exports=oddball_sum
  module.exports=oddballs_sum