const anotherArrayList = require('./27')

test('should be a,b,c,d,e,f', ()=>{
    expect(anotherArrayList).toStrictEqual(['a', 'b', 'c', 'd', 'e', 'f'])
})