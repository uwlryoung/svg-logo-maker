const {Triangle, Circle, Square} = require("./logo.js");

describe('Triangle', () => {
  test('Should render an svg file of a blue triangle and the words "SVG" in the color red', () => {
    const shape = new Triangle(
      'SVG',
      'red',
      'blue'
    );
    expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200"  xmlns="http://www.w3.org/2000/svg">
  <polygon points="150, 18 244, 182 56, 182" fill="blue" />
  <text x="150" y="155" font-size="60" text-anchor="middle" fill="red">SVG</text> 
</svg>`);
  })
})

describe('Circle', () => {
  test('Should render an svg file of a blue circle and the words "SVG" in the color red', () => {
    const shape = new Circle(
      'SVG',
      'red',
      'blue'
    );
    expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="150" cy="100" r="80" fill="blue" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">SVG</text>
</svg>`);
  })
})

describe('Square', () => {
  test('Should render an svg file of a blue square and the words "SVG" in the color red', () => {
    const shape = new Square(
      'SVG',
      'red',
      'blue'
    );
    expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect x="70" y="20" width="160" height="160" fill="blue"/>
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">SVG</text>
</svg>`);
  })
})
