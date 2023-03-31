// TODO: Include packages needed for this application

const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [ {
    message: 'What is your Github username?',
    name: 'github'
},
{
    message: 'What is your email address?',
    name: 'email'
},
    
{
    message: 'What is the title of your application?',
    name: 'title'
},
{
    message: 'Please enter a description of your application',
    name: 'description'

},
{
    message: 'Please enter the instructions for installing your application',
    name: 'install'

},
{
    message: 'Please enter usage information for your application',
    name: 'usage'

},
{
    message: 'Please enter any contribution guidelines',
    name: 'contribution'

},
{
    message: 'Describe any tests included with your application',
    name: 'test'

},
{
    type: 'list',
    message: 'Please choose a license for your application',
    name: 'license',
    choices: ['Apache 2.0', 'GNU Public License', 'MIT License', 'BSD-2 Clause', 'BSD-3 Clause', 'Boost Software License', 'Creative Commons Zero', 'Eclipse Public License', 'Mozilla Public License', 'None']
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully")};
        }
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) =>
       writeToFile('./README.md', generateMarkdown(data)));
   
        
        
        
        // (data) =>
    // generateMarkdown(data));

}

// Function call to initialize app
init();
