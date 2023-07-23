// This document will run the CLI (command line interface). 
// It needs to gather the information from the user and then send that information to "logo.js" to make the logo. 

const inquirer = require('inquirer');
const fs = require('fs');

class CLI {
  constructor() {
    this.characters = ''; 
  }

  run() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'characters',
          message: 'Please enter 3 charaters to be displayed on your logo: ',
          validate: function(characters){
            if (characters.length > 3){
              console.log("\nYour logo must have 3 or fewer characters in it. Please try again.\n");
              return false;
            } else {
              return true;
            }
          }
        },
        {
          type: 'input',
          name: 'text-color',
          message: 'What color would you like the text to be? Type in a color name or a color hexadecimal number.\n '
        },
        {
          type: 'list',
          name: 'shapes',
          message: 'What shape would you like your logo to be? ',
          choices: ["circle", "square", "triangle"]
        },
        {
          type: 'input',
          name: 'shape-color',
          message: 'What color would you like the shape to be? Type in a color name or a color hexadecimal number.\n '
        }
      ])
      .then(function({logo})=> {

      })
  }

  renderLogo(){

  }


}

module.exports = CLI;