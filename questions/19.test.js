const es5 = require('./19')
const iterative = require('./19')

describe('Function tests', () => {
    it('should be 20', () => {
        expect(es5([1, 2, 3, 4, 5])).toEqual(20)
    });
    it('should be 20', () => {
        expect(iterative([1, 2, 3, 4, 5])).toEqual(20)
    });
})