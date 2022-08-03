const transformNamesToUppercase = require('./9')
console.log(`val is: ${transformNamesToUppercase}`)

test('should be IRISH, DAISY, ANNA ', ()=>{
    expect(transformNamesToUppercase(['irish', 'daisy', 'anna'])).toEqual(['IRISH', 'DAISY', 'ANNA'])
})