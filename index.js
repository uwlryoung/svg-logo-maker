const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./lib/logo.js');

function run() {
  console.log(`
  _                           _______                                                
 (_)                         (_______)                                _              
  _       ___   ____  ___     _   ___ _____ ____  _____  ____ _____ _| |_ ___   ____ 
 | |     / _ \\ / _  |/ _ \\   | | (_  | ___ |  _ \\| ___ |/ ___|____ (_   _) _ \\ / ___)
 | |____| |_| ( (_| | |_| |  | |___) | ____| | | | ____| |   / ___ | | || |_| | |    
 |_______)___/ \\___ |\\___/    \\_____/|_____)_| |_|_____)_|   \\_____|  \\__)___/|_|    
              (_____| `)

  console.log("Thank you for using our Logo Generator. Make your very own logo as an .svg file!\nPlease answer the following prompts to make one:\n");

  inquirer
    .prompt([
      {
        type: 'input',
        name: 'characters',
        message: '\nPlease enter up to 3 charaters to be displayed on your logo: ',
        validate: function(characters){
          if (characters.length > 3){
            console.log("\n\x1b[31mYour logo must have 3 or fewer characters in it. Please try again.\n");
            return false;
          } else if (characters.length === 0) {
            console.log("\n\x1b[31mYour logo must have at least one character in it. Please try again.\n")
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
        message: '\nWhat \x1b[36mcolor\x1b[0m would you like the shape to be? \x1b[90m(Color name or Hexadecimal number): ',
      }
    ])
    .then(function(response) {
      const folderName = './logoFolder';
      // Creates a folder to put the readme file into
		  if (!fs.existsSync(folderName)) {
			fs.mkdirSync(folderName);
		  } 

      if (response.shapes === "circle"){
        const shape = new Circle(
          response.characters,
          response.textColor,
          response.shapeColor
        )
        fs.writeFile(`${folderName}/logo.svg`, shape.render(), (err) =>
          err ? console.error(err) : console.log('\nGenerated logo.svg! You can find your logo in the "logoFolder".\n')
        )
      } else if (response.shapes === "square") {
        const shape = new Square(
          response.characters,
          response.textColor,
          response.shapeColor
        )
        fs.writeFile(`${folderName}/logo.svg`, shape.render(), (err) =>
          err ? console.error(err) : console.log('\nGenerated logo.svg! You can find your logo in the "logoFolder".\n')
        )
      } else if (response.shapes === "triangle") {
        const shape = new Triangle(
          response.characters,
          response.textColor,
          response.shapeColor
        )
        fs.writeFile(`${folderName}/logo.svg`, shape.render(), (err) =>
          err ? console.error(err) : console.log('\nGenerated logo.svg! You can find your logo in the "logoFolder".\n')
        )
      }
    })
}

run();