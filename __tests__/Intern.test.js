const Intern = require('../lib/Intern');

test('get intern school', () => {
    const intern = new Intern('Sarah', 1, 'email@email.com', 'uofA Bootcamp')
    expect(intern.school).toEqual(expect.any(String))
})