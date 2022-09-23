let number = 3;
// Ask the user to enter a number

// print out corresponding multiplication table using a loop.
for ( let i = 1; i <= 10; i++ ) {
    
    process.stdout.write("\n*" + i.toString().padStart(10, " ") + " * " + number + " = " + (i * number).toString().padEnd(10, " ") + "*");
}