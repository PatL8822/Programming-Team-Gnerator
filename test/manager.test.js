const Manager = require('../lib/Manager')
const smith = new Manager('smith', 4, 'smith@gmail.com', 10, 'Manager')

describe('InternClass', () => {

    describe('constructor', () => {
        it('Should return Intern name', () => {
            expect(smith.name).toEqual('smith');
            expect(smith.id).toEqual(4);
            expect(smith.email).toEqual('smith@gmail.com');
        });
    });

    describe('getName method', () => {
        it('Should return employee name', () => {
            expect(smith.getName()).toEqual('smith');
        });
    });

    describe('getId Method', () => {
        it('Should return id', () => {
            expect(smith.getId()).toEqual(4);
        });
    });

    describe('getEmail method', () => {
        it('Should return email', () => {
            expect(smith.getEmail()).toEqual('smith@gmail.com');
        });
    });

    describe('getOfficeNumber method', () => {
        it('Should return email', () => {
            expect(smith.getOfficeNumber()).toEqual(10);
        });
    });

    describe('getRole method', () => {
        it('Should return Role', () => {
            expect(smith.getRole()).toEqual('Manager');
        });
    });
});