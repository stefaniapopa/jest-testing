const g = require('./3');
console.log(`value is:${g}`)


describe('Function tests', () => {
    it('should be object', () => {
        expect(typeof g).toBe('object')
    });

})