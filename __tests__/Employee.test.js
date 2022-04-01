const { expect, test } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('get employee name', () => {
    const employee = new Employee('Sarah', 1, 'email@email.com')
    expect(employee.getName()).toEqual(expect.any(String))
})

test('get employee id', () => {
    const employee = new Employee('Sarah', 1, 'email@email.com')
    expect(employee.getId()).toEqual(expect.any(Number))
})

test('get employee email', () => {
    const employee = new Employee('Sarah', 1, 'email@email.com')
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
})

test('get employee email', () => {
    const employee = new Employee('Sarah', 1, 'email@email.com')
    expect(employee.getRole()).toEqual('Employee');
})