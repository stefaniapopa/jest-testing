//37.Implement Bubble Sort  
/**Answer
The steps in the bubble sort algorithm are:
Loop through the whole array starting from index 1
If the number in the array at index i-1 is greater than i, swap the numbers and continue
Once the end of the array is reached, start looping again from the beginning
Once no more elements can be swapped, the sorting is complete */

module.exports = function swap(arr, i1, i2) {
    var temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
  }
  
  function bubblesort(arr) {
    
    var swapped = true;
    
    // keep going unless no elements can be swapped anymore
    while (swapped) {
      
      // set swapped to false so that the loop stops
      // unless two element are actually swapped
      swapped = false;
  
      // loop through the whole array swapping adjacent elements
      for (var i = 1; i < arr.length; i++) {
        if (arr[i-1] > arr[i]) {
          swap(arr, i-1, i);
          swapped = true;
        }
      }
      
    }
    
    return arr;
           
}