const duplicate = require('./32')

test('should be [1,2,3,4,5,1,2,3,4,5]', ()=>{
    expect(duplicate([1, 2, 3, 4, 5])).toEqual([1,2,3,4,5,1,2,3,4,5])
})