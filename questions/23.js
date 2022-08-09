//23.Explain how Insertion Sort works
/** Insertion Sort is an in-place, stable, comparison-based sorting algorithm. The idea is to maintain a sub-list which is always sorted. An element which is to be 'insert'ed in this sorted sub-list, has to find its appropriate place and then it has to be inserted there. Hence the name, insertion sort.
Steps on how it works:
If it is the first element, it is already sorted.
Pick the next element.
Compare with all the elements in sorted sub-list.
Shift all the the elements in sorted sub-list that is greater than the value to be sorted.
Insert the value.
Repeat until list is sorted. */

var insertionSort = function(a) {
    // Iterate through our array
    for (var i = 1, value; i < a.length; i++) {
        // Our array is split into two parts: values preceeding i are sorted, while others are unsorted
        // Store the unsorted value at i
        value = a[i];
        // Interate backwards through the unsorted values until we find the correct location for our `next` value
        for (var j = i; a[j - 1] > value; j--) {
            // Shift the value to the right
            a[j] = a[j - 1];
        }
        // Once we've created an open "slot" in the correct location for our value, insert it
        a[j] = value;
    }
    // Return the sorted array
    return a;
};

console.log(insertionSort([1,4,2,5,3]))
module.exports=insertionSort