console.log();
console.log("--------------------------------------------------------------");
console.log("Showcases call-function of This");
console.log("--------------------------------------------------------------");
console.log();


let dragon = {
    attack: function (victim, damage) {
        console.log(this.name + " the " + this.color + " dragon attacks, breathing " + this.breath + " from above! "
                + victim + " takes " + damage + " points of damage!");
    }
};

let dragon1 = {
    name: 'Maryn',
    age: 500,
    color: 'blue',
    breath: 'fire'
};

let dragon2 = {
    name: 'Draco',
    age: 724,
    color: 'black',
    breath: 'acid'
};

dragon.attack();                // name = undefined
dragon.attack.call(dragon1, 'Sam', 9001);    // name = Maryn
dragon.attack.call(dragon2, 'Viktor', 420);    // name = Draco


console.log();
console.log();
console.log("--------------------------------------------------------------");
console.log("Showcases apply-function of This");
console.log("--------------------------------------------------------------");
console.log();


let dragon3 = {
    name: 'Phyexia',
    age: 500,
    color: 'gray',
    breath: 'ice'
};

let dragon4 = {
    name: 'Urax',
    age: 123,
    color: 'purple',
    breath: 'lightning'
};

dragon.attack();                // name = undefined
dragon.attack.apply(dragon3, ['Arthur', 1]);    // name = Maryn
dragon.attack.apply(dragon4, ['Merlin', 0]); // name = Draco


console.log();
console.log();
console.log("--------------------------------------------------------------");
console.log("Showcases bind-function of This");
console.log("--------------------------------------------------------------");
console.log();


let person = {
    name: "Sam",
    age: 25,
    speak: function () {
        console.log("Hello, I am " + this.name);
    }
};

person.speak();     // Hello, I am Sam

let unboundFunction = person.speak;
unboundFunction();  // Hello, I am undefined

let boundFunction = unboundFunction.bind(person);
boundFunction();  // Hello, I am Sam