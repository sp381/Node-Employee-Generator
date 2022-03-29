const employeeDirectory = require('employeeDirectory');
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./lib/generateMarkdown');

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
    ])
}