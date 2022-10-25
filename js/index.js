
const inquirer = require('inquirer');
const fs = require('fs');
const employee = require('./lib/employee.js')
const engineer = require('lib/engineer.js')
const intern = require('lib/intern.js')
const manager = require('lib/manager.js');
const { type } = require('os');


team = [];

function startRoster() {

    function selectTeamMember() {
        inquirer.prompt([{
            type: 'list',
            message: 'Select your group you would like to start with.',
            name: 'Selection',
            choices: ['Employee', 'Engineer', 'Intern', 'Manager',],
            validate: (value) => { if (value) { return true } else { return 'Please make a selection.' } }
        }]).then((data) => {
            switch (data.addSelection) {
                case 'Employee':
                    employee();
                    break;
                case 'Engineer':
                    engineer();
                    break;
                case 'Intern':
                    intern();
                case 'Manager':
                    manager();
                    break
            };

        });
    };


    function employee() {
        inquirer.prompt([
            {
                type: 'input',
                message: 'What is the employee name?',
                name: 'employeeName',
                validate: (value) => { if (value) { return true } else { return 'Please enter name.' } }

            },
        ]);
    };


    function engineer() {

    }


    function intern() {

    }


    function manager() {

    }








}
