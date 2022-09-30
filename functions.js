// Create a function hello()
function hello() {
    // that prints out text "Hello"
    process.stdout.write("Hello");
}

// Call the function
hello();


// Create a function that takes two numbers as input
function sum(number1, number2) {
    // calculates the sum of the two numbers
    let sum = number1 + number2;
    number1 = 1;
    // prints out the result
    process.stdout.write("\n" + number1 + " + " + number2 + " = " + sum);
}

// Call the function to test it
let number1 = 2;
let number2 = 5
sum(number1, number2);
process.stdout.write("Value of the original variable is " + number1);
sum(28, 59);

// Create a function that takes two numbers as input
function sum2(number1, number2) {
    // calculates the sum of the two numbers
    let sum = number1 + number2;
    // return the result
    return sum;
}

// Call the function
let result = sum2(10, 10);
process.stdout.write("\nSum is " + result);
process.stdout.write("\nSum is " + sum2(100, 5));
let average = sum2(10, 55, 456, 10) / 4;
process.stdout.write("\nAverage is " + average);