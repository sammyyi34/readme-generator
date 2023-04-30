// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT License') {
    return 'https://img.shields.io/badge/License-MIT-yellow.svg';
  } else if (license === 'Apache License 2.0') {
    return 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
  } else if (license === 'GNU General Public License v3.0') {
    return 'https://img.shields.io/badge/License-GPLv3-blue.svg';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT License') {
    return 'https://opensource.org/licenses/MIT';
  } else if (license === 'Apache License 2.0') {
    return 'https://opensource.org/licenses/Apache-2.0';
  } else if (license === 'GNU General Public License v3.0') {
    return 'https://opensource.org/licenses/GPL-3.0';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `This project is licensed under the [${license}](${renderLicenseBadge(license)}). ${renderLicenseLink(license)}`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
https://github.com/${data.Username}/${data.Title}
# Description
${data.Description}
# Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
# Installation
To install necessary dependencies, run the following command: ${data.Installation}
# Usage
To use this app, ${data.Usage}
# License
${renderLicenseSection(data.License)}
# Contributing
Contributors: ${data.Contributing}
# Tests
To run tests, run the following command: ${data.Tests}
# Questions
If you have any questions about the repo, open an issue or contact me directly at ${data.Email}.
`;
}

module.exports = generateMarkdown;
