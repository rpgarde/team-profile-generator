const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require('./lib/Employee.js')
const Manager = require('./lib/Manager.js')
const Intern = require('./lib/Intern.js')
const Engineer = require('./lib/Engineer.js')
const generateHTML = require('./lib/generateHTML.js')

// const empl = new Employee('Paolo',10,'rpgarde@gmail.com')
// const mgr = new Manager('Paolo Garde',10,'rpgarde@gmail.com',4)
const emplArr = [] 

const allQuestions = [{
    type: "input",
    message: "Please enter name",
    name: "name"
  }, {
    type: "input",
    message: "Please enter ID",
    name: "id"
  },
  {
    type: "input",
    message: "Please enter Email",
    name: "email"
  }
];

const internQuestion = {
    type: "input",
    message: "Please enter intern's school",
    name: "school"
  }

const managerQuestion = {
type: "number",
message: "Please enter manager's office number",
name: "officeNumber"
}

const engineerQuestion = {
    type: "input",
    message: "Please enter engineer's GitHub username",
    name: "github"
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

// function for manager (put into init )

const employeeChoice = () => {
    inquirer.prompt(addChoice)
    .then((data)=>
    {
        if(data.role === "Engineer"){
            engineerPrompt()
        }
        else if(data.role === "Intern"){
            internPrompt()
        }
        else{
            console.log("All employees added!")
            writeToFile("team.html",generateHTML(emplArr))
        }
    })
}

const init = () => {
    inquirer.prompt([...allQuestions,managerQuestion])
    .then((data)=>{
    let manager = new Manager(data.name, data.id, data.email, data.officeNumber)
    manager.role = manager.getRole()
    console.log(manager.name)
    emplArr.push(manager)
    console.log(emplArr)
    employeeChoice()
    });
}

const engineerPrompt = () => {
    inquirer.prompt([...allQuestions,engineerQuestion])
    .then((data)=>{
    let engineer = new Engineer(data.name, data.id, data.email, data.github)
    engineer.role = engineer.getRole()
    emplArr.push(engineer)
    console.log(emplArr)
    employeeChoice()
    });
}

const internPrompt = () => {
    inquirer.prompt([...allQuestions,internQuestion])
    .then((data)=>{
    let intern= new Intern(data.name, data.id, data.email, data.school)
    intern.role = intern.getRole()
    emplArr.push(intern)
    console.log(emplArr)
    employeeChoice()
    });
}

// Write function
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          throw err;
        }
        console.log("File created!");
      });
}



init()