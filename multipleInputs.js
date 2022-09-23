process.stdout.write("Please enter two numbers separated with space");

process.stdin.on( "data", function( inputFromUser ){
    // The statements below will be executed automatically after
    // the user has typed in something.
    let enteredNumber = inputFromUser.toString().split(" "); // Split will split the string into multiple substrings
    process.stdout.write("-" + inputFromUser + "-");
    let number1 = Number(enteredNumber[0]); // Substrings can be referred to with square brackets and an index ( starts with 0 ).
    let number2 = Number(enteredNumber[1]); 
    process.stdout.write("Entered number1 is " + number1 + " and number2 id " + number2);
    if ( number1 < number2 ) {
        process.stdout.write("Entered number1 is smaller.");
    } else {
        process.stdout.write("Entered number2 is smaller.");
    }
    process.exit();
});