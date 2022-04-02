const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateMarkdown = require('./src/generateMarkdown');
const employees = []
console.log(employees);
const managerQuestions = [
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
]

const engineerQuestions = [
    {
    type: 'input',
    name: 'githubName',
    message: 'Enter team members GitHub username (Required): ',
    default: 'sp381',
    validate: githubName => {
        if (githubName) {
            return true;
        } else {
            console.log('Please enter the GitHub username!');
            return false;
        }
    },  
}, 
]

const internQuestions = [
    {
        type: 'input',
        name: 'schoolName',
        message: 'Enter team members school name (Required): ',
        default: 'UofA Bootcamp',
        validate: schoolName => {
            if (schoolName) {
                return true;
            } else {
                console.log('Please enter the school name!');
                return false;
            }
        },  
    },  
]

const baseEmployeeQuestions = [
    {
        type: 'input',
        name: 'employeeName',
        message: 'Enter employees name' ,
        default: 'Sarah',
        validate: employeeName => {
            if (employeeName) {
                return true;
            } else {
                console.log('Please enter the employees name here!');
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
]
const managerData = () => {
    const questions = baseEmployeeQuestions.concat(managerQuestions)
        inquirer.prompt(questions)
            .then(data => {
                console.log(data);
                const empObject = new Employee(data.employeeName, data.employeeId, data.employeeEmail)
                employees.push(empObject)
                init()
            })
}

const engineerData = () => {
    const questions = baseEmployeeQuestions.concat(engineerQuestions)
        inquirer.prompt(questions)
            .then(data => {
                console.log(data);
                const empObject = new Employee(data.employeeName, data.employeeId, data.employeeEmail)
                employees.push(empObject)
                init()
            })
}

const internData = () => {
    const questions = baseEmployeeQuestions.concat(internQuestions)
        inquirer.prompt(questions)
            .then(data => {
                console.log(data);
                const empObject = new Employee(data.employeeName, data.employeeId, data.employeeEmail)
                employees.push(empObject)
                init()
            })
}

const employeeData = () => {
    const questions = baseEmployeeQuestions
        inquirer.prompt(questions)
            .then(data => {
                console.log(data);
                const empObject = new Employee(data.employeeName, data.employeeId, data.employeeEmail)
                employees.push(empObject)
                init()
            })
}

function init() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'employeeType',
            message: 'Enter employee (Required): ',
            choices: [
                'Manager',
                'Engineer',
                'Intern',
                'Employee',
                'Exit',
            ],
        },
    ])
    .then(responses => {
        console.log(responses.employeeType);
        switch(responses.employeeType) {
            case('Manager'): {
                console.log('Managers been selected');
                managerData()
                break
            }
            case('Engineer'): {
                console.log('Engineers been selected');
                engineerData()
                break
            }
            case('Intern'): {
                console.log('Interns been selected');
                internData()
                break
            }
            case('Employee'): {
                console.log('Employee has been selected');
                employeeData()
                break
            }
            default: 
            break
        }
        //const manager = new Manager(responses.teamManagerName, responses.employeeId, responses.employeeEmail, responses.officeNumber)
    //     employees.push(manager)
    //    generateMarkdown(responses);
    //    writeToFile("GenerateEmployeeProfile", generateMarkdown(responses));
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