// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fileName = 'README.md';

// array of questions for user input
const questions = [
// Name, License, title, user story, acceptance criteria, mockup, link
const projectQuestions = [
    { name: 'name', message:'Your name'},
    { name: 'email', message:'Your email address'},
    { name: 'license', message: 'Select license; Apache, GNU, Mozilla or MIT'},
    { name: 'title', message:"Add project title"},
    { name: 'user story', message: 'Add User Story'},
    { name: 'acceptance criteria', message: 'Add Acceptance Criteria'},
    { name: 'mockup', message: 'Add visual example of deployed app style and functionality. ie, jpg, GIF, Mp4'},
    { name: 'link', message: 'Provide link to deployed application'},
    { name: 'credits', message: 'Add credits of any co-contributers'}
  ];
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => {
      if (err) throw err;
  
      console.log('Done');
    });
  }

  // function to get license input
function getInput() {
    inquirer
      .prompt(projectQuestions)
      .then(answers => {
        if (answers.license === 'MIT') {
          answers.license = '[MIT](https://opensource.org/licenses/MIT)'
        } else if (answers.license === 'Apache') {
          answers.license = '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)';
        } else if (answers.license === 'GNU') {
          answers.license = '[GNU GPLv3](https://opensource.org/licenses/GPL-3.0)';
        } else if (answers.license === 'Mozilla') {
          answers.license = '[Mozilla 2.0](https://opensource.org/licenses/MPL-2.0)';
        } else {
          answers.license = 'No licence selected';
        }
  
        writeToFile(fileName, answers);
      });
  }

  // get answers to questions
  getInput();

// Create a function to initialize app
function node index.js() {}

// Function call to initialize app
node index.js();
