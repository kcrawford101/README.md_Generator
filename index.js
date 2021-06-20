// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of project?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of your project?"
    },    
    {
        type: "input",
        name: "install",
        message: "How to install the application?"
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use this application?"
    },
    {
        type: "input",
        name: "test",
        message: "How to test the application?"
    },
    {
        type: "input",
        name: "credit",
        message: "Who or what helped you create this application?"
    },    
    {
        type: "input",
        name: "queGithub",
        message: "Please enter Github link:"
    },
    {
        type: "input",
        name: "queEmail",
        message: "Please enter email address:"
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for this application: ",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync (path.join(process.cwd(),fileName), data)}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(inquirerResponses => {
        writeToFile('README.md', generateMarkdown ({...inquirerResponses}))
    })
}
console.log("Generating README.md")

// Function call to initialize app
init();
