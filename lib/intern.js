
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, internSchoolName) {
        super(name, id, email);
        this.internSchoolName = internSchoolName;
    };

    getInternSchoolName() {
        return this.internSchoolName;
    };

    getRole() {
        return "Intern"
    }
};

module.exports = Intern;