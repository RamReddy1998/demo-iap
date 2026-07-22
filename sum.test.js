const add = require('./index')
test('add 5 and 3 its equal to 8',()=>{
    expect(add(5,3)).toBe(8)
})