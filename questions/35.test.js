const StockPicker = require('./35')

test('should be 16', ()=>{
    expect(StockPicker([44, 30, 24, 32, 35, 30, 40, 38, 15])).toBe(16)
})  