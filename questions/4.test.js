const d = require('./4')
const z = require('./4')

describe('Function tests', () => {
    it('comparation should be true', () => {
        expect(d == z).toBe(true)
    });
    it('comparation should be true', () => {
        expect(d === z).toBe(true)
    });
})