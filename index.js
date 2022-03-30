//const employeeDirectory = require('employeeDirectory');
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./src/generateMarkdown');
const Manager = require('./lib/Manager');
const employees = []

function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'teamManagerName',
            message: 'Enter team managers name (Required): ',
            default: 'Sarah',
            validate: teamManagerName => {
                if (teamManagerName) {
                    return true;
                } else {
                    console.log('Please enter the team managers name here!');
                    return false;
                }
            },  
        },

        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter team managers name (Required): ',
            default: '1',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter the employees ID here!');
                    return false;
                }
            },  
        },

        {
            type: 'input',
            name: 'employeeEmail',
            message: 'Enter team managers email (Required): ',
            default: 'teammanager@email.com',
            validate: employeeEmail => {
                if (employeeEmail) {
                    return true;
                } else {
                    console.log('Please enter the email!');
                    return false;
                }
            },  
        },

        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter team members office number (Required): ',
            default: '1',
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log('Please enter the office number!');
                    return false;
                }
            },  
        },

        {
            type: 'list',
            name: 'menuList',
            message: 'How would you like to continue? (Required)',
            choices: [
                "Add an Engineer",
                "Add an Intern",
                "Finish building my team",
            ],
            validate: menuList => {
                if (menuList) {
                    return true;
                } else {
                    console.log('Please select one.');
                    return false;
                }
            }
        },
    ])
    .then(responses => {
        console.log(responses);
        const manager = new Manager(responses.teamManagerName, responses.employeeId, responses.employeeEmail, responses.officeNumber)
        employees.push(manager)
       // generateMarkdown(responses);
       // writeToFile("GenerateEmployeeProfile", generateMarkdown(responses));
    })

    function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, (err) => {
            if (err) {
                console.error(err);
            }
            console.log('The Employee Profile Generator has been created!');
        })
    }

}
init()