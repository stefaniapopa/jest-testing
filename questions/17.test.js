const test_divisors = require('./17')

test('should be ',()=>{
    expect(test_divisors(2, 10)).toStrictEqual([2, 3, "div3", 4, 5, 6, "div3", 7, 8, 9, 'div3', 10])
})