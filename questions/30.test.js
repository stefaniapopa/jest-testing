const modifyArray = require('./30')

let arr = [1, 2, 3, 4, 5];

test('should be ', ()=>{
    expect(modifyArray(arr, ()=>{console.log("array has been modified", arr)})).toBe('array has been modified [ 1, 2, 3, 4, 5, 100 ]')
})