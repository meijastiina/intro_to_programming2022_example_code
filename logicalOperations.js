// Ask the user to input a number.
process.stdout.write("Please enter a number: ");
// Read the input given by the user and store it in a variable
process.stdin.on( "data", function( inputFromUser ){
    // The statements below will be executed automatically after
    // the user has typed in something.
    let enteredNumber = Number(inputFromUser);
    if ( enteredNumber >= 1 && enteredNumber <= 10 ) {
        process.stdout.write("Entered number is between 1-10");
    }
    if ( enteredNumber < 1 || enteredNumber > 10 ) {
        process.stdout.write("Entered number is outside 1-10");
    }
    process.exit();
});

