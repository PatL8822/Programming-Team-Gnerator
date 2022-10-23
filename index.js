import inquirer from 'inquirer';
import { Employee } from './lib/Employee.js';
import { Manager } from './lib/Manager.js';
import { Engineer } from './lib/Engineer.js';
import { Intern } from './lib/Intern.js';

var myEmployee = new Employee(
  'Jeremy Employee',
  1234,
  'employee@applustech.com'
);
var myManager = new Manager('Jeremy Manager', 5678, 'manager@applustech.com');
var myEngineer = new Engineer(
  'Jeremy Engineer',
  1010,
  'engineer@applustech.com'
);
var myIntern = new Intern('Jeremy Intern', 8989, 'intern@applustech.com');

console.log(myEmployee.getRole());
console.log(myManager.getRole());
console.log(myEngineer.getRole());
console.log(myIntern.getRole());

const questions = [
  {
    type: 'input',
    name: 'managerName',
    message: "Please provide the team manager's name:",
    default: 'No Name Provided',
  },
  {
    type: 'input',
    name: 'managerId',
    message: "Please provide the team manager's employee ID:",
    default: '0000',
  },
  {
    type: 'input',
    name: 'managerEmail',
    message: "Please provide the team manager's email address:",
  },
  {
    type: 'input',
    name: 'managerOfficeNumber',
    message: "Please provide the team manager's office number:",
    default: '253-555-1212',
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log('\nManager Name:');
  console.log(JSON.stringify(answers, null, '  '));
});
