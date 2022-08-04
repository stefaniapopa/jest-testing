const fibonacci = require('./22')

console.log(fibonacci(5))

test('should be 5', ()=>{
    expect(fibonacci(5)).toBe(5)
})