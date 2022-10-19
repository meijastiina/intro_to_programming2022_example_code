let number1 = 1.45679;
let number2 = 890.987456;

// Round method rounds to the nearest integer
process.stdout.write("\nNumber " + number1 + " rounded with method round is " + Math.round(number1));
process.stdout.write("\nNumber " + number2 + " rounded with method round is " + Math.round(number2));

// Ceil methods rounds UP
process.stdout.write("\nNumber " + number1 + " rounded with method round is " + Math.ceil(number1));
process.stdout.write("\nNumber " + number2 + " rounded with method round is " + Math.ceil(number2));

// Floor method rounds DOWN
process.stdout.write("\nNumber " + number1 + " rounded with method round is " + Math.floor(number1));
process.stdout.write("\nNumber " + number2 + " rounded with method round is " + Math.floor(number2));

// toFixed method lets you decide the number of decimals
process.stdout.write("\nNumber " + number1 + " rounded with method round is " + number1.toFixed(2));
process.stdout.write("\nNumber " + number2 + " rounded with method round is " + number2.toFixed(2));

let number3 = 2;
let number4 = 2;
process.stdout.write("\nNumber " + number3 + " in power " + number4 + " is " + Math.pow(number3, number4));