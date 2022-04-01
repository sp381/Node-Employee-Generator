const Engineer = require('../lib/Engineer');

test('get engineer github', () => {
    const engineer = new Engineer('Sarah', 1, 'email@email.com', 'sp381')
    expect(engineer.github).toEqual(expect.any(String))
})