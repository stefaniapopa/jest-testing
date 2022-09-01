const isInt = require('./31')

test('should be false', ()=>{
    expect(isInt(12.2)).toBe(false)
})