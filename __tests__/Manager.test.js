const Manager = require('../lib/Manager'); 

test('get manager officeNumber', () => {
    const manager = new Manager('Sarah', 1, 'email@email.com', 1)
    expect(manager.officeNumber).toEqual(expect.any(Number))
})