const sum_array = require('./16')

test('should be 22', ()=>{
    expect(sum_array([[3, 2], [1], [4, 12]])).toBe(22)
})