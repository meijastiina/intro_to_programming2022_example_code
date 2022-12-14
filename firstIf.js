// Ask the user to input a number.
process.stdout.write("Please enter a number: ");
// Read the input given by the user and store it in a variable
process.stdin.on( "data", function( inputFromUser ){
    // The statements below will be executed automatically after
    // the user has typed in something.
    let enteredNumber = Number(inputFromUser);
    // Check if number is 0
    if ( enteredNumber == 0 ) {
        // If yes -> print out "You entered a zero".
        process.stdout.write("You entered a zero");
    } else {
        // If no -> print out "You entered something else".
        process.stdout.write("You entered something else");
    }
    process.exit();
});

