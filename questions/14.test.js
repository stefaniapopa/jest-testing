const lucky_sevens = require('./14')

console.log('val is: ${lucky_sevens}')

test('should be true', ()=>{
    expect(lucky_sevens([2, 1, 5, 1, 0])).toBe(true)
})