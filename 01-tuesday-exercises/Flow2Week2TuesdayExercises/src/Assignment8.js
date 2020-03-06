console.log();
console.log("--------------------------------------------------------------");
console.log("Assignemnt 8.1");
console.log("--------------------------------------------------------------");
console.log();

var counter = (function () {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function () {
            changeBy(1);
        },
        decrement: function () {
            changeBy(-1);
        },
        value: function () {
            return privateCounter;
        }
    };
})();

console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1


console.log();
console.log();
console.log("--------------------------------------------------------------");
console.log("Assignemnt 8.2");
console.log("--------------------------------------------------------------");
console.log();

var person = (function () {
    let privateName = new String("No Name");
    let privateAge = new Number();
    return {
        setAge: function (newAge) {
            privateAge = newAge;
        },
        setName: function (newName) {
            privateName = newName;
        },
        getInfo: function () {
            return privateName + ", " + privateAge;
        }
    };
})();

console.log(person.getInfo());

person.setAge(16);
person.setName("Jackson");

console.log(person.getInfo());
