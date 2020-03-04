// Assignment 3
Array.prototype.myFilter = function (callback) {
    var newArray = [];
    for (var i = 0; i < this.length; i++) {
        let word = this[i];
        if (callback(word)) {
            newArray.push(word);
        }
    }
    return newArray;
};

Array.prototype.myMap = function (callback) {
    var newArray = [];
    for (var i = 0; i < this.length; i++) {
        let word = this[i];
        newArray.push(callback(word));
    }
    return newArray;
};

var names = ["Michael", "Andreas", "Cahit", "Marcus", "Steve"];

console.log("Original Names: " + names.join(', '));
console.log();

var filterNames = names.myFilter(function (word) {
    return word.toLowerCase().includes("a");
});

console.log("Filtered Names: " + filterNames.join(', '));

var reversedWords = names.myMap(function (word) {
    return word.split("").reverse().join("");
});

console.log("Reversed Names: " + reversedWords.join(', '));
console.log();



