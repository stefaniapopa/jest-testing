const bubbleSort = require('./13')
console.log(`val is: ${bubbleSort}`)

test('should be 1,2,3,4,5,6,7,8', ()=>{
    expect(bubbleSort([1,3,5,2,4,6,8,7])).toStrictEqual([1,2,3,4,5,6,7,8])
})