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

//