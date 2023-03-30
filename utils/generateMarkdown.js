// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
  if(license === 'GNU Public License') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
  if(license === 'MIT License') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  if(license === 'BSD-2 Clause') {
    return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
  }
  if(license === 'BSD-3 Clause') {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  }
  if(license === 'Boost Software License') {
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  }
  if(license === 'Creative Commons Zero') {
    return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
  }
  if(license === 'Eclipse Public License') {
    return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
  }
  if(license === 'Mozilla Public License') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }
  if(license === 'None') {
    return ''
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
  
  return `# ${data.title} ${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents 
## Installation 
${data.install}
## Usage 
${data.usage}
## License 
${data.license}
## Contributing 
${data.contribution}
## Tests 
${data.test}
## Questions 
Github: ${data.github} 
Email: ${data.email}
`;
}

module.exports = generateMarkdown;
