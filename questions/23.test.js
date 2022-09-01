const insertionSort = require('./23')
console.log(`val is: ${insertionSort([1,4,2,5,3])}`)

test('should be 1,2,3,4,5', ()=>{
    expect(insertionSort([1,4,2,5,3])).toEqual([1,2,3,4,5])
})