const Employee = require('./lib/Employee.js')
const Manager = require('./lib/Manager.js')
const Intern = require('./lib/Intern.js')
const Engineer = require('./lib/Engineer.js')


const empl = new Employee('Paolo',10,'rpgarde@gmail.com')
const mgr = new Manager('Paolo Garde',10,'rpgarde@gmail.com',4)

console.log(empl.getName())
console.log(mgr)