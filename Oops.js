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