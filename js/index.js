
const inquirer = require('inquirer');
const fs = require('fs');
/*const employee = require('../lib/Employee.js')
const engineer = require('../lib/Engineer.js')
const intern = require('../lib/Intern.js')
const manager = require('../lib/Manager.js');*/
//const { type } = require('os');


team = [];

function startRoster() {

    //Main menu. 
    function selectTeamMember() {
        inquirer.prompt([{
            type: 'list',
            message: 'Select which group you want.',
            name: 'Selection',
            choices: ['Employee', 'Engineer', 'Intern', 'Manager', 'Finished Submissions'],
        }]).then((data) => {
            switch (data.Selection) {
                case 'Employee':
                    employee();
                    break;
                case 'Engineer':
                    engineer();
                    break;
                case 'Intern':
                    intern();
                    break;
                case 'Manager':
                    manager();
                    break;
                default: genHTML();
            };

        });
    };

    //Team info.
    function employee() {
        inquirer.prompt([
            {
                type: 'input',
                message: 'Enter employee name.',
                name: 'employeeName',
                validate: (value) => { if (value) { return true } else { return 'Enter name.' } }

            },
            {
                type: 'input',
                message: 'Enter employee ID.',
                name: 'employeeId',
                validate: (value) => { if (value) { return true } else { return 'Enter ID.' } }
            },
            {
                type: 'input',
                message: 'Enter employee E-mail.',
                name: 'employeeEmail',
                validate: (value) => {
                    if (value) { return true } else { return 'Enter E-mail.' }
                },
            },
        ]).then(data => {
            const newEmployee = (data.employeeName, data.employeeId, data.employeeEmail);
            team.push(newEmployee);
            selectTeamMember();
        })
    };


    function engineer() {
        inquirer.prompt([
            {
                type: 'input',
                message: 'Enter engineer name.',
                name: 'engineerName',
                validate: (value) => { if (value) { return true } else { return 'Enter name.' } }

            },
            {
                type: 'input',
                message: 'Enter engineer ID.',
                name: 'engineerId',
                validate: (value) => { if (value) { return true } else { return 'Enter ID.' } }
            },
            {
                type: 'input',
                message: 'Enter engineer E-mail.',
                name: 'engineerEmail',
                validate: (value) => {
                    if (value) { return true } else { return 'Enter E-mail.' }
                },
            },
            {
                type: 'input',
                message: 'Enter engineer GitHub username.',
                name: 'engineerGitHub',
                validate: (value) => { if (value) { return true } else { return 'Enter username.' } }

            },
        ]).then(data => {
            const newEngineer = (data.engineerName, data.engineerId, data.engineerEmail, data.engineerGitHub);
            team.push(newEngineer);
            selectTeamMember();
        });
    };


    function intern() {
        inquirer.prompt([
            {
                type: 'input',
                message: 'Enter intern name.',
                name: 'internName',
                validate: (value) => { if (value) { return true } else { return 'Enter name.' } }

            },
            {
                type: 'input',
                message: 'Enter intern ID.',
                name: 'internId',
                validate: (value) => { if (value) { return true } else { return 'Enter ID.' } }
            },
            {
                type: 'input',
                message: 'Enter intern e-mail.',
                name: 'internEmail',
                validate: (value) => {
                    if (value) { return true } else { return 'Enter E-mail.' }
                },
            },
            {
                type: 'input',
                message: 'Enter intern school name.',
                name: 'internSchoolName',
                validate: (value) => { if (value) { return true } else { return 'Enter school name.' } }

            },
        ]).then(data => {
            const newIntern = (data.internName, data.internId, data.internEmail, data.internSchoolName);
            team.push(newIntern);
            selectTeamMember();
        });
    };


    function manager() {
        inquirer.prompt([
            {
                type: 'input',
                message: 'Enter manager name.',
                name: 'managerName',
                validate: (value) => { if (value) { return true } else { return 'Enter name.' } }

            },
            {
                type: 'input',
                message: 'Enter manager ID.',
                name: 'managerId',
                validate: (value) => { if (value) { return true } else { return 'Enter ID.' } }
            },
            {
                type: 'input',
                message: 'Enter manager e-mail.',
                name: 'managerEmail',
                validate: (value) => {
                    if (value) { return true } else { return 'Enter E-mail.' }
                },
            },
            {
                type: 'input',
                message: 'Enter manager office number.',
                name: 'managerOfficeNumber',
                validate: (value) => { if (value) { return true } else { return 'Enter office number.' } }

            },
        ]).then(data => {
            const newManager = (data.managerName, data.managerId, data.managerEmail, data.managerOfficeNumber);
            team.push(newManager);
            selectTeamMember();
        });
    };

    function genHTML() {
        console.log('Groups generated!');

    };
    selectTeamMember();
};
startRoster();