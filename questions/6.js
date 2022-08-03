//9. Explain what is Binary Search
/*When the list is sorted we can use the binary search (also known as half-interval search, logarithmic search, or binary chop) technique to find items on the list */

const binarySearch = function(array, value) {
    let guess,
        min = 0,
        max = array.length - 1;	

    while(min <= max){
        guess = Math.floor((min + max) /2);
	if(array[guess] === value)
	    return guess;
	else if(array[guess] < value)
	    min = guess + 1;
	else
	    max = guess - 1;	
     }
	
     return -1;
}

console.log(binarySearch(1, 2 ,3 ,4 ,5 ,6 ,7))
module.exports=binarySearch;