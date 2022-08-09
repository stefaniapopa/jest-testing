const duplicate = require('./26')

test('should be [1, 2, 3, 5, 9, 8]', ()=>{
    expect(duplicate).toStrictEqual([1, 2, 3, 5, 9, 8])
})