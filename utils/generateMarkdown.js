// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT License') {
    return 'This project is licensed under the MIT License.';
  } else if (license === 'Apache License 2.0') {
    return 'This project is licensed under the Apache License 2.0.';
  } else if (license === 'GNU General Public License v3.0') {
    return 'This project is licensed under the GNU General Public License v3.0.';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
