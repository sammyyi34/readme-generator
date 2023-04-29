// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./util/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'Title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'Description',
    message: 'Write a detailed description explaining your project.'
  },
  {
    type: 'input',
    name: 'Table of Contents',
    message: 'Table of Contents (press enter to continue)'
  },
  {
    type: 'input',
    name: 'Installation',
    message: 'If your project requires installation please explain the installation process. If there are none leave blank.'
  },
  {
    type: 'input',
    name: 'Usage',
    message: 'Please explain how the app should be used.'
  },
  {
    type: 'list',
    name: 'License',
    message: 'Please select which license you would like to use.',
    choices: ['MIT License', 'Apache License 2.0', 'GNU General Public License v3.0']
  },
  {
    type: 'input',
    name: 'Contributing',
    message: 'Who contributed on this project.'
  },
  {
    type: 'input',
    name: 'Test',
    message: 'What are the commands to test your project?'
  },
  {
    type: 'input',
    name: 'Questions',
    message: 'Contact info for any questions.'
  },
  {
    type: 'input',
    name: 'Username',
    message: 'What is your GitHub username'
  },
  {
    type: 'input',
    name: 'Email',
    message: 'What is your email address?'
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function(err) {
    console.log(fileName);
    console.log(data);
    if (err) {
      return console.log(err);
    } else {
      console.log('success')
    }
  })
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function(data) {
    writeToFile("README.md", generateMarkdown(data));
    console.log(data);
  })
}

// Function call to initialize app
init();
