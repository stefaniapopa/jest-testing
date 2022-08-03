const oddball_sum = require('./18')
const oddballs_sum = require('./18')

describe('Function tests', () => {
    it('should be 9', () => {
        expect(oddball_sum([1, 2, 3, 4, 5])).toEqual(9)
    });
    it('should be 9', () => {
        expect(oddballs_sum([1, 2, 3, 4, 5])).toEqual(9)
    });
})