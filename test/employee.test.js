const Employee = require('../lib/Employee')
const joe = new Employee('joe', 1, 'joe@gmail.com', 'Employee')

describe('EmployeeClass', () => {

    describe('constructor', () => {
        it('Should return employee name', () => {
            expect(joe.name).toEqual('joe');
            expect(joe.id).toEqual(1);
            expect(joe.email).toEqual('joe@gmail.com');
        });
    });

    describe('getName method', () => {
        it('Should return employee name', () => {
            expect(joe.getName()).toEqual('joe');
        });
    });

    describe('getId Method', () => {
        it('Should return id', () => {
            expect(joe.getId()).toEqual(1);
        });
    });

    describe('getEmail method', () => {
        it('Should return email', () => {
            expect(joe.getEmail()).toEqual('joe@gmail.com');
        });
    });

    describe('getRole method', () => {
        it('Should return Role', () => {
            expect(joe.getRole()).toEqual('Employee');
        });
    });
});