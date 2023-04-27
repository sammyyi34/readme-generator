// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
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
    message: 'Provide a table of contents for your project.'
  },
  {
    type: 'input',
    name: 'Installation',
    message: 'If your project requires installation please explain the installation process.'
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
  }
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
    name: 'username',
    message: 'What is your GitHub username'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  },
];



// Function call to initialize app
init();