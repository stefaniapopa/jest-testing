const object = require('./1');
console.log(`Object is: ${object}`)

describe('Function tests', () => {
    it('should be hello', () => {
        expect(object.a).toEqual('hello')
    });
    it('should be 24', () => {
        expect(object.b).toEqual(24)
    });
    it('should be true', () => {
        expect(object.c).toEqual(true)
    })
})