const arr = require('./2')

describe('Function tests', () => {
    it('should be hello world', () => {
        expect(arr[0]).toContain('hello world')
    });
    it('should be false', () => {
        expect(arr[2]).toEqual(false)
    });
    it('should be 3', () => {
        expect(arr.length).toEqual(3)
    })
})