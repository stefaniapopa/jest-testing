const add = require('./10')
console.log(`val is: ${add}`)

describe('Function tests', () => {
    it('should be 3', () => {
        expect(add.call(null, 1, 2)).toBe(3)
    });
    it('should be 3', () => {
        expect(add.apply(null, [1, 2])).toBe(3)
    });
})

