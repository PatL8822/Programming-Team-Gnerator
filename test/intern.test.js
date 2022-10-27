const Intern = require('../lib/Intern')
const bob = new Intern('bob', 3, 'bob@gmail.com', 'UW', 'Intern')

describe('InternClass', () => {

    describe('constructor', () => {
        it('Should return Intern name', () => {
            expect(bob.name).toEqual('bob');
            expect(bob.id).toEqual(3);
            expect(bob.email).toEqual('bob@gmail.com');
        });
    });

    describe('getName method', () => {
        it('Should return employee name', () => {
            expect(bob.getName()).toEqual('bob');
        });
    });

    describe('getId Method', () => {
        it('Should return id', () => {
            expect(bob.getId()).toEqual(3);
        });
    });

    describe('getEmail method', () => {
        it('Should return email', () => {
            expect(bob.getEmail()).toEqual('bob@gmail.com');
        });
    });

    describe('getInternSchoolName method', () => {
        it('Should return email', () => {
            expect(bob.getInternSchoolName()).toEqual('UW');
        });
    });

    describe('getRole method', () => {
        it('Should return Role', () => {
            expect(bob.getRole()).toEqual('Intern');
        });
    });
});