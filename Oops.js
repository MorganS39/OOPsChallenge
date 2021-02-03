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

//