//Assignment 5.a
console.log("------------------------------");
console.log("Assignment 5.a:");
console.log("------------------------------");
console.log();

var all = ["Lars", "Peter", "Jan", "Bo"];
console.log("All: " + all.join());
console.log("All: " + all.join(" "));
console.log("All: " + all.join("#"));
console.log("All: #" + all.join(", #"));

console.log();
//Assignment 5.b
console.log("------------------------------");
console.log("Assignment 5.b:");
console.log("------------------------------");
console.log();

var numbers = [2, 3, 67, 33];
console.log("Numbers Array: " + numbers.join(", "));
var result = numbers.reduce(function (total, n) {
    return total + n;
});
console.log("Result: " + result);

console.log();
//Assignment 5.c
console.log("------------------------------");
console.log("Assignment 5.c:");
console.log("------------------------------");
console.log();

var members = [
    {name: "Peter", age: 18},
    {name: "Jan", age: 35},
    {name: "Janne", age: 25},
    {name: "Martin", age: 22}];

var result = members.reduce(function (total, member, index, array) {
    if (index === 1) {
        total = total.age;
    }
    if (index !== array.length - 1) {
        return total + member.age;
    } else {
        return (total + member.age) / array.length;
    }
});
var resultOneLine = members.reduce((acc, member, index, arr) => acc + member.age / arr.length, 0);

console.log("Result: " + result);
console.log("Result OneLiner: " + resultOneLine);

console.log();
//Assignment 5.d
console.log("------------------------------");
console.log("Assignment 5.d:");
console.log("------------------------------");
console.log();

var votes = ["Clinton", "Trump", "Clinton", "Clinton", "Trump", "Trump", "Trump", "None"];
var result = votes.reduce(function (totalVotes, vote, index) {
    if (index === 1) {
        var firstVote = totalVotes;
        totalVotes = {};
        totalVotes[firstVote] = 1;
    }
    if (!totalVotes.hasOwnProperty(vote)) {
        totalVotes[vote] = 1;
    } else {
        totalVotes[vote]++;
    }
    return totalVotes;
});
console.log("Result:");
console.log(result);

