const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require('./lib/Employee.js')
const Manager = require('./lib/Manager.js')
const Intern = require('./lib/Intern.js')
const Engineer = require('./lib/Engineer.js')
const generateHTML = require('./lib/generateHTML.js')

// create empty array to add responses to
const emplArr = []

const validator = (input) => {
    if (input.length === 0) {
        return 'Please provide an input';
    }
    else {
        return true;
    }
}

const allQuestions = [{
    type: "input",
    message: "Please enter name",
    name: "name",
    validate: validator
}, {
    type: "input",
    message: "Please enter ID",
    name: "id",
    validate: validator
},
{
    type: "input",
    message: "Please enter Email",
    name: "email",
    validate: validator
}
];

const internQuestion = {
    type: "input",
    message: "Please enter intern's school",
    name: "school",
    validate: validator
}

const managerQuestion = {
    type: "number",
    message: "Please enter manager's office number",
    name: "officeNumber",
    validate: validator
}

const engineerQuestion = {
    type: "input",
    message: "Please enter engineer's GitHub username",
    name: "github",
    validate: validator
}

const addChoice = [{
    type: "list",
    message: "What type of team member would you like to add?",
    name: "role",
    choices: [
        "Engineer",
        "Intern",
        "No more employees to add"
    ]
}];

// write file function
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            throw err;
        }
        console.log("File created! Please check team.html\n");
    });
}

// function which asks next employee to add (or option to finish process)
const employeeChoice = () => {
    inquirer.prompt(addChoice)
        .then((data) => {
            if (data.role === "Engineer") {
                engineerPrompt()
            }
            else if (data.role === "Intern") {
                internPrompt()
            }
            else {
                writeToFile("./dist/team.html", generateHTML(emplArr))
            }
        })
}

const init = () => {
    inquirer.prompt([...allQuestions, managerQuestion])
        .then((data) => {
            let manager = new Manager(data.name, data.id, data.email, data.officeNumber)
            manager.role = manager.getRole()
            console.log(`Added ${manager.name} to the list of employees\n`)
            emplArr.push(manager)
            employeeChoice()
        });
}

const engineerPrompt = () => {
    inquirer.prompt([...allQuestions, engineerQuestion])
        .then((data) => {
            let engineer = new Engineer(data.name, data.id, data.email, data.github)
            engineer.role = engineer.getRole()
            console.log(`Added ${engineer.name} to the list of employees\n`)
            emplArr.push(engineer)
            employeeChoice()
        });
}

const internPrompt = () => {
    inquirer.prompt([...allQuestions, internQuestion])
        .then((data) => {
            let intern = new Intern(data.name, data.id, data.email, data.school)
            intern.role = intern.getRole()
            console.log(`Added ${intern.name} to the list of employees\n`)
            emplArr.push(intern)
            employeeChoice()
        });
}

init()