// Let's practice output formatting

// To add a package in your code, you can use require:
const util = require("util");

let number1 = 2.13123;
let number2 = 432;
process.stdout.write(util.format("Let's practice using util. Number1 is %d and Number2 is %d", number1.toFixed(2), number2));