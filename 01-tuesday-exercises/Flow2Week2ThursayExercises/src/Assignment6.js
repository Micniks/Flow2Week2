console.log();
console.log("The following will work:");
console.log();

function sentence(letter, n) {
    return letter + ": Sqaure Root of " + a + " is " + mySquare(a);
}

// A
var a = 4;
console.log(sentence("A", a));

// B
b = 5;
console.log(sentence("B", b));
var b;

console.log();
console.log("The following will Not work:");
console.log();

// C
var c;
console.log(sentence("C", c));
c = 3;

// D
console.log(sentence("D", d));
var d;
d = 2;

// E
console.log(sentence("E", e));
var e = 8;

console.log();
console.log("Let's look at difference in var and let variables");
console.log();

let x = 10;
console.log("outside block, let x = " + x);
{
    let x = 5;
    console.log("inside block, let x = " + x);
}
console.log("outside block again, let x is now = " + x);

console.log();

var y = 10;
console.log("outside block, var x = " + y);
{
    var y = 5;
    console.log("inside block, var x = " + y);
}
console.log("outside block again, var x is now = " + y);


function mySquare(n) {
    return n * n;
}

