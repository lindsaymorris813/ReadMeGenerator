const inquirer = require('inquirer');
const fs = require('fs');
const readMe = require('./renderReadMe.js');
const renderReadMe = require('./renderReadMe.js');

inquirer
    .prompt([
        {
            name: 'title',
            type: 'input',
            message: 'What is the title of your project?',
        },
        {   name: 'description',
            type: 'input',
            message: 'Input a description of your project:',
        },
        {
            name: 'installation',
            type: 'input',
            message: 'Describe installation process (if any):'
        },
        {
            name: 'usage',
            type: 'input',
            message: 'Describe potential uses or instructions for your project:',
        },
        {
            name: 'contribute',
            type: 'input',
            message: 'How can people contribute to your project?',
        },
        {
            name: 'tests',
            type: 'input',
            message: 'Describe the tests for your application, and how to use them:',
        },
        {
            name: 'license',
            type: 'list',
            message: 'Choose the type of license for your project:',
            choices: ['MIT', 'GPL 3.0', 'Apache 2.0', 'GPL 2.0', 'BSD 3', 'LGPL 2.1', 'Ms-Pl', 'BSD 2'],
        },
        {
            name: 'gitHub',
            type: 'input', 
            message: 'What is your gitHub username?',
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is your email address?',
        },
    ])
    .then((response) => {
        const filename = 'README.md'; 
        function renderReadMe(response) {
return (`
# ${response.title}
[![License](https://img.shields.io/static/v1?label=license&message=${response.license}&color=success)](https://github.com/lindsaymorris813/ReadMeGenerator)

## Table of Contents:
*[Description](#description)
*[Installation](#installation)
*[Usage](#usage)
*[License](#license)
*[Contribute](#contribute)
*[Tests](#tests)
*[Questions](#questions)

## DESCRIPTION:

${response.description}

## INSTALLATION

${response.installation}

## USAGE

${response.usage}

## LICENSE

${response.license}

## CONTRIBUTE

${response.contribute}

## TESTS

${response.tests}

## QUESTIONS

GitHub: ${response.gitHub}
Email: ${response.email}
`);
        };
        const renderedReadMe = renderReadMe(response);
            
        fs.writeFile('../created/' + filename, renderedReadMe, (err) => {
            err ? console.error(err) : console.log('ReadMe created!')
          });
    });
    