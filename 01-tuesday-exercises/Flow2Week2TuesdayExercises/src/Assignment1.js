// Assignment 1.a
var names = ["Michael", "Andreas", "Cahit", "Marcus", "Steve"];

console.log("Original Names: " + names.join(', '));

var filterNames = names.filter(word => word.toLowerCase().includes("a"));

console.log("Filtered Names: " + filterNames.join(', '));
console.log();


// Assignment 1.b

// It is unclear what 'all names reversed' means, but since we are using the map function, 
// I'll say the words themselves are reversed

console.log("Original Names: " + names.join(', '));

var reversedWords = names.map(word => word.split("").reverse().join(""));

console.log("Reversed Names: " + reversedWords.join(', '));
console.log();