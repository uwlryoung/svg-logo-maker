// Parent Class - Logo
class Logo {
  constructor(characters, textColor, shapeColor){
      this.characters = characters;
      this.textColor = textColor;
      this.shapeColor = shapeColor;
  }
}

// Children Classes: Triangle, Circle, Square
class Triangle extends Logo {
  constructor(characters, textColor, shapeColor){ 
    super(characters, textColor, shapeColor);
  }
  
  render(){
    return `<svg version="1.1" width="300" height="200"  xmlns="http://www.w3.org/2000/svg">
  <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
  <text x="150" y="155" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.characters}</text> 
</svg>`
  } // when doing the ${}, it always automatically makes it "this.characters". Is there a difference?
}

class Circle extends Logo {
  constructor(characters, textColor, shapeColor){
    super(characters, textColor, shapeColor);
  }

  render(){
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>
</svg>`
  }
}

class Square extends Logo {
  constructor(characters, textColor, shapeColor){
    super(characters, textColor, shapeColor);
  }

  render(){
    return `<svg version="1.1" width="300" height="200"  xmlns="http://www.w3.org/2000/svg">
  <rect x="70" y="20" width="160" height="160" fill="${this.shapeColor}"/>
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>
</svg>`
  }
}

// Exports Triangle, Circle, Square
module.exports = {
  Logo,
  Triangle,
  Circle,
  Square
}

