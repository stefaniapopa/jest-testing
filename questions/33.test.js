const twoSum = require('./33')

test('should be [[2, 5], [11, -4]]', ()=>{
    expect(twoSum([3, 5, 2, -4, 8, 11], 7)).toEqual([[2, 5], [11, -4]])
})