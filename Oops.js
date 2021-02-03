// Create a basic JavaScript Object
let dog = {
    name: "Borks",
    numLegs: 4
};

// Use dot notation to access the properties of an object
let dog = {
    name: "Spot",
    numLegs: 4
};
console.log(dog.name, dog.numLegs);

// Create a method on an object
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () {return "This dog has " + dog.numLegs + " legs."}
};

dog.sayLegs();

// Make code more reusable with this keyword
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog.sayLegs();

// define a constructor function
function Dog() {
    this.name = "Fluffers";
    this.color = "yellow";
    this.numLegs = 4;
}

// Use a constructor to create objects
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
}
let hound = new Dog();

// Extend constructors to receive arguments
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new Dog("Trotters", "orange");

// Verify an object's constructor with isntanceof
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

let myHouse = new House(3);
myHouse instanceof House;

// Understand own properties
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
for (let property in canary) {
    if(canary.hasOwnProperty(property)) {
    ownProps.push(property);
    }
}
console.log(ownProps);

// Use prototype properties to reduce duplicate code
function Dog(name) {
    this.name = name;
}
Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

// Iterate over ALL properties
function Dog(name) {
    this.name = name;
}
  
Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];
  
for (let property in beagle) {
    if(beagle.hasOwnProperty(property)) {
      ownProps.push(property);
    } else {
      prototypeProps.push(property);
    }
}

console.log(ownProps);
console.log(prototypeProps);

// Understand the constructor property
function Dog(name) {
    this.name = name;
}
  
function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
      return true;
    } else {
      return false;
    }
}

// Change the prototype to a new object
function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    numLegs: 2,
    eat: function() {
    
    },
    describe: function() {
      
    }
};

// Remember to set the constructor property when changing the prototype
function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
};

// Understand where an object's prototype comes from
function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);

// Understand the prototype chain
function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  
Object.prototype.isPrototypeOf(Dog.prototype);

// Use inheritance so you don't repeat yourself
function Cat(name) {
    this.name = name;
}

Cat.prototype = {
    constructor: Cat,
};

function Bear(name) {
    this.name = name;
}

Bear.prototype = {
    constructor: Bear,
};

function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom");
    }
};

// Inherit behaviors from a supertype
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype); 

// set the child's prototype to an instance of the parent
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
let beagle = new Dog();

// Reset an inherited constructor property
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();

// Add methods after inheritance
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
    console.log("Woof!");
};

let beagle = new Dog();

// Override inherited methods
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly = function() {
    return "Alas, this is a flightless bird.";
};

let penguin = new Penguin();
console.log(penguin.fly());

// Use a mixin to add common behavior between unrelated objects
let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};

let glideMixin = function(obj) {
    obj.glide = function() {
      console.log("Weee!");
    }
};

glideMixin(bird);
glideMixin(boat);

// Use closure to protect properties within an object from being modified externally
function Bird() {
    let weight = 15;
    this.getWeight = function() {
      return weight;
    }
}

// Understand the immediately invoked function expression (IIFE)
(function () {
    console.log("A cozy nest is ready");
})();

// Use an IIFE to create a module
let funModule = (function () {
    return {
      isCuteMixin: function(obj) {
        obj.isCute = function() {
      return true;
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
        };
      }
    }
})();