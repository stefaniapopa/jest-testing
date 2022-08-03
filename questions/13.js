//13.Explain how Bubble Sort works 
/*Bubble Sort is based on the idea of repeatedly comparing pairs of adjacent elements and then swapping their positions if they are in the wrong order. Bubble sort is a stable, in-place sort algorithm. */

const bubbleSort = function(array) {
    let swaps;
    do {
      swaps = false;
      for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
          let temp = array[i + 1];
          array[i + 1] = array[i];
          array[i] = temp;
          swaps = true;
        }
      }
    } while (swaps);
    
    return array;
  };

  console.log(bubbleSort([1,3,5,2,4,8,7]))

  module.exports=bubbleSort