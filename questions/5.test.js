const linearSearch = require('./5')

describe('Function tests', () => {
    it('should find the length of letters', () => {
        expect(linearSearch(['a', 'b', 'c', 'd'], 'd')).toBe(3)
    });
} )