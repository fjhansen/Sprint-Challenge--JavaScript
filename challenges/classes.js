// 1. Copy and paste your prototype in here and refactor into class syntax.

class NewCuboidMaker {  //would not console.log without class rename. conflict with prototypes.js
    constructor (attributes) {
        this.length = attributes.length,
        this.width = attributes.width,
        this.height = attributes.height
    }
    volume(){
        return this.length * this.width * this.height;
    }
    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

 

  const newCuboid = new NewCuboidMaker ({
    length: 4,
    width: 5,
    height: 5
  });


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(newCuboid.volume()); // 100
console.log(newCuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends NewCuboidMaker {
    constructor(attributes){
      super(attributes);

    } 
    
      volume() {if(this.length == this.width && this.width == this.height && this.height == this.length) {
          return this.width * this.length * this.height;
      } else {
          return false;
      }
    }

    surfaceArea(){
         return 6 * (this.length * this.length)
    }
}

const cube = new CubeMaker ({
    length: 4,
    width: 4,
    height: 4
  });

console.log(cube.volume())
console.log(cube.surfaceArea())
