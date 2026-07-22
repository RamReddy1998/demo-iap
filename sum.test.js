const add = require('./index')
test('add 6 and 10 its equal to 16',()=>{
    expect(add(6,10)).toBe(16)
})