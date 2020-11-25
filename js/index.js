const inquirer = require('inquirer');
const fs = require('fs');

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
    .then((response => {

    }))