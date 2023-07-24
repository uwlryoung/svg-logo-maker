# SVG Logo Maker
![License](https://img.shields.io/badge/License-MIT_License-blue.svg)
  
  ## Description
  This SVG Logo Maker makes logos based on the user input in a .svg file. Users can select their logo shape to be either a circle, square, or triangle. The character limit per logo is three characters. 
  
  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [How to Contribute](#how-to-contribute)
  - [License](#license)
  - [How to Test](#how-to-test)
  - [Questions](#questions)
  - [Challenges and Future Improvements](#challenges-and-future-improvements)

  ## Installation
  Clone the respository from GitHub in a desired location. 

  ## Usage
  Run the SVG Logo maker by using node.js. Open the terminal from the file location, then type 'node index.js' in the console. The program will start and prompt the user for input.

  ### Notes on Usage
  - Colors
    - If you choose to use the same color for the characters and shape, you will not see the characters as they will blend in with the shape. 
    - If the color you selected does not exist, it automatically defaults to black. 
    - When selecting colors, you can either type in a color's name or use a hexadecimal number. 
  - Characters
    - The number of characters cannot exceed three, and there must be at least 1 character. 
    - If you do not want characters, make the character color the same color as the shape color. Or, once the .svg file is created, open "logo.svg" in the "logoFolder" and delete the line that says `<text x="150" y="125" font-size="60" text-anchor="middle" fill="[character's color]">[characters]</text>`
  - The `index.html` file is there so that you can view your logo on the browser. 
  - Recommended: If using VS Code, install the extension [SVG](https://marketplace.visualstudio.com/items?itemName=jock.svg) so that you can view .svg files. 

  ### Technologies Used
  - [Node.js](https://nodejs.org/en) is required to run the program, make sure to install first. 
  - [npm](https://www.npmjs.com/) is required. Make sure to initialize it by typing `npm init -y` into the terminal
  - [Inquirer](https://www.npmjs.com/package/inquirer) is required to run the questions, specifically version 8.2.4. Once npm is initialized, download the Inquirer dependencies by typing `npm i` or `npm install` or `npm i inquirer@8.2.4` in the terminal. 
  - [jest](https://jestjs.io/) is used for testing purposes. Although not required to run the program itself, if you would like to use this code for your own purposes, having these tests to ensure you don't accidenatlly break those functions, jest will be helpful.

  ## Credits
  N/A

  ## How to Contribute
  Fork the project from GitHub and push changes in a feature branch. Changes will be reviewed. 

   ## How to Test
  Run the program several times trying different inputs. 

  ## License 
  SVG Logo Maker is covered under the MIT License.

  ## Questions
  [GitHub Profile](https://github.com/uwlryoung)

  If you have any questions, feel free to email uwlryoung@gmail.com

  ## Challenges and Future Improvements 
  - A warning that tells users when they selected the same character color and same shape color, then seeing if they want to start over. 
  - Add more complicated shapes as logos 
  - Start the program asking whether or not the user wants to see detailed information about how to use the program / hints, tips and tricks. 
  - Allowing user to select font type, whether or not they want a border for their shape and choose the color of the border
  - Finding a way to validate the color questions so that the program ensures that it's an actual color. (E.g., if user accidentally types in "pirple" they will be prompted with "Color does not exist, please try again" and they can retype the color.) 
  - Prompt the user to see if they want to make any of the characters a different color from each other, and if they do, then go through the characters one by one setting it's color.
  