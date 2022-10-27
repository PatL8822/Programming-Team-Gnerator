const Engineer = require('../lib/Engineer')

const shmoe = new Engineer('shmoe', 2, 'shmoe@gmail.com', 'GitHub', 'Engineer');

describe('EngineerClass', () => {

    describe('constructor', () => {
        it('Should return employee name', () => {
            expect(shmoe.name).toEqual('shmoe');
            expect(shmoe.id).toEqual(2);
            expect(shmoe.email).toEqual('shmoe@gmail.com');
        });
    });

    describe('getName method', () => {
        it('Should return employee name', () => {
            expect(shmoe.getName()).toEqual('shmoe');
        });
    });

    describe('getId Method', () => {
        it('Should return id', () => {
            expect(shmoe.getId()).toEqual(2);
        });
    });

    describe('getEmail method', () => {
        it('Should return email', () => {
            expect(shmoe.getEmail()).toEqual('shmoe@gmail.com');
        });
    });

    describe('getGitHub method', () => {
        it('Should return GitHub', () => {
            expect(shmoe.getGitHub()).toEqual('GitHub');
        });
    });

    describe('getRole method', () => {
        it('Should return Role', () => {
            expect(shmoe.getRole()).toEqual('Engineer');
        });
    });
});