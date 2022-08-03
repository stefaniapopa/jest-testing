//5.Explain what is Linear (Sequential) Search and when may we use one?
/* Linear (sequential) search goes through all possible elements in some array and compare each one with the desired element. It may take up to O(n) operations, where N is the size of an array and is widely considered to be horribly slow. In linear search when you perform one operation you reduce the size of the problem by one.
It is used when you have no idea  what you are searching */

function linearSearch(arr, toFind){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === toFind) return i;
      }
      return -1;
}

console.log(linearSearch(['a', 'b', 'c', 'd'], 'd'))
module.exports=linearSearch;