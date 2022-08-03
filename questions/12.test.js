const noDups = require('./12')
console.log(`val is: ${noDups}`)

test('should be 1', ()=>{
    expect(noDups).toEqual([1, 4, 99, 3, 15])
})