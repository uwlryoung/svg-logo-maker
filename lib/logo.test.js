const {Triangle, Circle, Square} = require("./logo.js");

describe('Triangle', () => {
  test('should render a blue triangle', () => {
    const shape = new Triangle(
      characters = 'SVG',
      textColor = 'red',
      shapeColor = 'blue'
    );
    expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200"  xmlns="http://www.w3.org/2000/svg">
    <polygon points="150, 18 244, 182 56, 182" fill="${shape.shapeColor}" />
    <text x="150" y="155" font-size="60" text-anchor="middle" fill="${shape.textColor}">${shape.characters}</text> 
  </svg>`);
  })
})