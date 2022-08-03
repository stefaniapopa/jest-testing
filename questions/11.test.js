const plusTen = require('./11')

console.log(`val is: ${plusTen}`)

test('should be 20', ()=>{
    expect(plusTen(10)).toBe(20)
})