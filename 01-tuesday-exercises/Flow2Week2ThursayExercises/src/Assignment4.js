//Assignment 4.a
console.log("------------------------------");
console.log("Assignment 4.a:");
console.log("------------------------------");
console.log();
var numbers = [1, 3, 5, 10, 11];
console.log("Numbers = " + numbers.join(","));

var result = numbers.map(function (n, index, array) {
    if (index + 1 < array.length) {
        return n + numbers[index + 1];
    } else {
        return n;
    }
});
console.log("Result = " + result.join(","));
console.log();
console.log();
console.log();

//Assignment 4.b
console.log("------------------------------");
console.log("Assignment 4.b:");
console.log("------------------------------");
console.log();

var names = ["Michael", "Andreas", "Cahit", "Marcus", "Steve"];
var result = '<nav>\n' + names.map(word => '     <a href=””>' + word + "</a>\n").join("") + '</nav>';

console.log("Names: " + names.join(", "));
console.log();
console.log(result);

console.log();
console.log();
console.log();

//Assignment 4.c
console.log("------------------------------");
console.log("Assignment 4.c:");
console.log("------------------------------");
console.log();

var names = [{name: "Lars", phone: "1234567"}, {name: "Peter", phone: "675843"}, {name: "Jan", phone: "98547"}, {name: "Bo", phone: "79345"}];
var s = "     ";
var ss = s + s;
var tableHeaders = s + "<tr>\n"
        + ss + "<th>Name</th>\n"
        + ss + "<th>Phone</th>\n"
        + s + "</tr>\n";

var result = '<table>\n'
        + tableHeaders
        + names.map(name => {
            return s + '<tr>\n'
                    + ss + '<td>' + name.name + '</td>\n'
                    + ss + '<td>' + name.phone + '</td>\n'
                    + s + '</tr>\n';
        }
        ).join("") + '</table>';

console.log(result);
console.log();