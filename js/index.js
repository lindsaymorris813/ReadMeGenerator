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
        }
        {
            name: '',
            type: '',
            message: '',
        }
    ])