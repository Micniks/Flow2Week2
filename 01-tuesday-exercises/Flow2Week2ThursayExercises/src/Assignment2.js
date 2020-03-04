// Assignment 2.a
function myFilter(array, callback) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        let word = array[i];
        if (callback(word)) {
            newArray.push(word);
        }
    }

    return newArray;
}

var names = ["Michael", "Andreas", "Cahit", "Marcus", "Steve"];

console.log("Original Names: " + names.join(', '));

var filterNames = myFilter(names, function (word) {
    return word.toLowerCase().includes("a");
});

console.log("Filtered Names: " + filterNames.join(', '));
console.log();


// Assignment 2.b

function myMap(array, callback) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        let word = array[i];
        newArray.push(callback(word));
    }
    return newArray;
}

console.log("Original Names: " + names.join(', '));

var reversedWords = myMap(names, function (word) {
    return word.split("").reverse().join("");
});

console.log("Reversed Names: " + reversedWords.join(', '));
console.log();