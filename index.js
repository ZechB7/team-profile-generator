const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern')
const Manager = require('./lib/manager');
const createHtml = require('./src/generateHTML')
const idArray = [];
const teamArray = [];

function runApp() {
  console.log(`
    Create your team
    `);
  createTeam();
  function createTeam() {
    inquirer.prompt([{
      type: "list",
      message: "Choose an employee",
      name: "addEmployee",
      choices: ["Manager", "Engineer", "Intern", "Thats all of 'em."]
    }]).then(function (input) {
      switch (input.addEmployee) {
        case "Manager":
          createManager();
          break;
        case "Engineer":
          createEngineer();
          break;
        case "Intern":
          createIntern();
          break;
        default:
          console.log(`
                    Nice team! 
                    `)
          fs.writeFileSync('./dist/index.html', createHtml(teamArray));
      }
    })
  };

  function createManager() {
    inquirer.prompt([{
      type: 'input',
      name: "managerName",
      message: "Managers name? ",
      validate: (answer) => {
        if (answer !== '') {
          return true;
        }
        return 'Enter at least one character.';
      },
    },
    {
      type: 'input',
      name: "managerId",
      message: "Manager's ID? ",
      validate: (answer) => {
        const pass = answer.match(/^[1-9]\d*$/);
        if (pass) {
          if (idArray.includes(answer)) {
            return 'ID is taken.';
          } else {
            return true;
          }
        }
        return 'Needs to be a positive number greater than zero.';
      },
    },
    {
      type: 'input',
      name: "managerEmail",
      message: "Manager's email? ",
      validate: (answer) => {
        const pass = answer.match(/\S+@\S+\.\S+/);
        if (pass) {
          return true;
        }
        return 'Enter a valid email address.';
      },
    },
    {
      type: 'input',
      name: "managerOfficeNumber",
      message: "Manager's office number? ",
      validate: (answer) => {
        const pass = answer.match(/^[1-9]\d*$/);
        if (pass) {
          return true;
        }
        return 'Enter a positive number greater than zero.';
      }
    }
    ]).then(answers => {
      const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
      teamArray.push(manager);
      idArray.push(answers.managerId);
      createTeam(teamArray);
    });
  };

  function createEngineer() {
    inquirer.prompt([
      {
        type: 'input',
        name: "engineerName",
        message: "Engineer's name?",
        validate: (answer) => {
          if (answer !== '') {
            return true;
          }
          return 'Enter at least one character.';
        },
      },
      {
        type: 'input',
        name: "engineerId",
        message: "Engineer's ID?",
        validate: (answer) => {
          const pass = answer.match(/^[1-9]\d*$/);
          if (pass) {
            if (idArray.includes(answer)) {
              return 'ID is taken.';
            } else {
              return true;
            }
          }
          return 'Enter a positive number greater than zero.';
        },
      },
      {
        type: 'input',
        name: "engineerEmail",
        message: "Engineer's email?",
        validate: (answer) => {
          const pass = answer.match(/\S+@\S+\.\S+/);
          if (pass) {
            return true;
          }
          return 'Enter a valid email address.';
        },
      },
      {
        type: 'input',
        name: "engineerGithub",
        message: "Engineer's GitHub username?",
        validate: (answer) => {
          if (answer !== '') {
            return true;
          }
          return 'Enter a valid Github.';
        },
      },
    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamArray.push(engineer);
      idArray.push(answers.engineerId)
      createTeam(teamArray);
    });
  };

  function createIntern() {
    inquirer.prompt([
      {
        type: 'input',
        message: "Intern's name?",
        name: "internName",
        validate: (answer) => {
          if (answer !== '') {
            return true;
          }
          return 'Enter at least one character.';
        },
      },
      {
        type: 'input',
        message: "Intern's ID? ",
        name: "internId",
        validate: (answer) => {
          const pass = answer.match(/^[1-9]\d*$/);
          if (pass) {
            if (idArray.includes(answer)) {
              return 'This ID is taken.';
            } else {
              return true;
            }
          }
          return 'Enter a positive number greater than zero.';
        },
      },
      {
        type: 'input',
        message: "Intern's email? ",
        name: "InternEmail",
        validate: (answer) => {
          const pass = answer.match(/\S+@\S+\.\S+/);
          if (pass) {
            return true;
          }
          return 'Enter a valid email address.';
        },
      },
      {
        type: 'input',
        message: "Intern's school? ",
        name: "internSchool",
        validate: (answer) => {
          if (answer !== '') {
            return true;
          }
          return 'Enter a valid school.';
        },
      },

    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.InternEmail, answers.internSchool);
      teamArray.push(intern);
      idArray.push(answers.internId)
      createTeam(teamArray);
    });
  }
}

runApp();