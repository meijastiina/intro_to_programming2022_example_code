process.stdout.write("Please enter two numbers separated with space");

process.stdin.on( "data", function( inputFromUser ){
    // The statements below will be executed automatically after
    // the user has typed in something.
    let enteredNumber = inputFromUser.toString().split(" ");
    let number1 = enteredNumber[0];
    let number2 = enteredNumber[1];
    process.stdout.write("Entered number1 is " + number1 + " and number2 id " + number2);

    process.exit();
});