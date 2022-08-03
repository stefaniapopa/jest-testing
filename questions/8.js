//8.What is a Jump (or Block) Search?
/*Jump Search (also referred to as Block Search) is an algorithm used to search for the position of a target element on a sorted data collection or structure.
The fundamental idea behind this searching technique is to search fewer number of elements compared to linear search algorithm (which scans every element in the array to check if it matches with the element being searched or not). This can be done by skipping some fixed number of array elements or jumping ahead by fixed number of steps in every iteration. */

/*function jumpSearch(arrayToSearch, valueToSearch){
    let lengths = arrayToSearch?.length || 0;
    let step = Math.floor(Math.sqrt(lengths));
    let index = (Math.min(step, lengths)-1);
    let lowerBound = 0;
    while (arrayToSearch[index] < valueToSearch)
    {
      lowerBound = step;
      step += step;
      if (lowerBound >= lengths){
        return -1;
      }
    }
     
    let upperBound = Math.min(step, lengths);
    while (arrayToSearch[lowerBound] < valueToSearch)
    {
      lowerBound++;
      if (lowerBound == upperBound){
        return -1;
      }
    }
    if (arrayToSearch[lowerBound] == valueToSearch){
       return lowerBound;
    }
    return -1;
  }

  console.log(jumpSearch())*/

  //module.exports=jumpSearch  