const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./lib/logo.js');

function run() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'characters',
        message: '\nPlease enter up to 3 charaters to be displayed on your logo: ',
        validate: function(characters){
          if (characters.length > 3){
            console.log("\nYour logo must have 3 or fewer characters in it. Please try again.\n");
            return false;
          } else if (characters.length === 0) {
            console.log("\nYour logo must have at least one character in it. Please try again.\n")
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: 'input',
        name: 'textColor',
        message: '\nWhat \x1b[36mcolor\x1b[0m would you like the character(s) to be? \x1b[90m(Color name or Hexadecimal number): '
      },
      {
        type: 'list',
        name: 'shapes',
        message: '\nWhat shape would you like your logo to be? ',
        choices: ["circle", "square", "triangle"]
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: '\nWhat \x1b[36mcolor\x1b[0m would you like the shape to be? \x1b[90m(Color name or Hexadecimal number): '
      }
    ])
    .then(function(response) {
      if (response.shapes === "circle"){
        const shape = new Circle(
          response.characters,
          response.textColor,
          response.shapeColor
        )
        fs.writeFile('logo.svg', shape.render(), (err) =>
          err ? console.error(err) : console.log('\nSuccess!')
        )
      } else if (response.shapes === "square") {
        const shape = new Square(
          response.characters,
          response.textColor,
          response.shapeColor
        )
        fs.writeFile('logo.svg', shape.render(), (err) =>
          err ? console.error(err) : console.log('Success!')
        )
      } else if (response.shapes === "triangle") {
        const shape = new Triangle(
          response.characters,
          response.textColor,
          response.shapeColor
        )
        fs.writeFile('logo.svg', shape.render(), (err) =>
          err ? console.error(err) : console.log('Success!')
        )
      }
    })
}

run();